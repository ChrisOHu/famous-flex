/**
 * @author: Sean Hu
 */

/**
 * Controller for views.
 *
 * @module
 */
define(function(require, exports, module) {

    var AnimationController = require('./AnimationController');
    var TouchSync = require('famous/inputs/TouchSync');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Transform = require('famous/core/Transform');

    /**
     * @class
     * @param {Object} [options] Configurable options.
     * @alias module:ViewController
     */
    function ViewController(options) {
        AnimationController.apply(this, arguments);
        this.setOptions({
            keepHiddenViewsInDOMCount: 7
        });

        this._state = STATES.IDLE;
        this._trackingPointer = undefined;
        this._touchSync = new TouchSync({direction: TouchSync.DIRECTION_X});
        this._stateModifier = new StateModifier();

        this._eventInput.pipe(this._touchSync);
        this._touchSync.on('start', _touchStart.bind(this));
        this._touchSync.on('update', _touchUpdate.bind(this));
        this._touchSync.on('end', _touchEnd.bind(this));
    }
    ViewController.prototype = Object.create(AnimationController.prototype);
    ViewController.prototype.constructor = ViewController;

    ViewController.DEFAULT_OPTIONS = {
        // pixels per millisecond
        velocityThreshold: 50,
        revertDeltaDistance: 10,
        fireDeltaDistance: 10
    };

    var STATES = {
        IDLE     : 0,
        STARTED  : 1,
        TRACKING : 2,
        FIRED    : 3
    };

    /**
     * Show an renderable and call its onRendered callback on completion (if exists).
     *
     * @param {Renderable} renderable View or surface to show
     * @param {Object} [options] Options, the same as AnimationController.show options.
     * @return {ViewController} this
     */
    ViewController.prototype.show = function(renderable, options) {
        AnimationController.prototype.show.call(this, renderable, options, renderable.onRendered);

        return this;
    };

    /**
     * Hide current renderable and call its onHidden callback on completion (if exists).
     *
     * @param {Object} [options] Options, the same as AnimationController.hide options.
     * @return {ViewController} this
     */
    ViewController.prototype.hide = function(options) {
        var item = this._viewStack[this._viewStack.length - 1];
        AnimationController.prototype.hide.call(this, options, item.view.onHidden);

        return this;
    };

    /**
     * Remove target renderable from _viewStack
     *
     * @param {Renderable} renderable View or surface to show
     * @return {ViewController} this
     */
    ViewController.prototype.removeFromStack = function(renderable) {
        var index = this._viewStack.indexOf(renderable);
        if (index >= 0) {
            this._viewStack[index].view = undefined;
            this._renderables.views.splice(index, 1);
            this._viewStack.splice(index, 1);

            if (renderable.onHidden) {
                renderable.onHidden();
            }
        }

        return this;
    };

    function _touchStart(event) {
        if (this._viewStack.length < 2) {
            return;
        }

        if (!this._trackingPointer) {
            this._trackingPointer = event.touch;
            this._state = STATES.STARTED;
        }
    }

    function _touchUpdate(event) {
        if (!this._trackingPointer) {
            this._trackingPointer = event.touch;
        }

        if (this._trackingPointer === event.touch) {
            var velocity = event.velocity;
            var position = event.position;
            var delta = event.delta;

            switch (this._state) {
                case STATES.STARTED:
                    this._state = STATES.TRACKING;
                _updateViews(delta, position, velocity);
                break;
                case STATES.TRACKING:
                    _updateViews(delta, position, velocity);
                break;
                case STATES.FIRED:
                    default:
                    break;
            }
        }
    }

    function _touchEnd(event) {
        if (this._trackingPointer === event.touch) {
            switch (this._state) {
                case STATES.STARTED:
                    this._state = STATES.IDLE;
                this._trackingPointer = undefined;
                break;
                case STATES.TRACKING:
                    _revertTracking();
                break;
                case STATES.FIRED:
                    default:
                    break;
            }
        }
    }

    function _updateViews(delta, position, velocity) {
        if (Math.abs(velocity) >= this.options.velocityThreshold) {
            if (velocity > 0) {
                _popViewStack.call(this);
            } else {
                _revertTracking.call(this);
            }
        } else if (delta < 0 && position <= this.options.revertDeltaDistance) {
            _revertTracking.call(this);
        } else if (delta > 0 && (this._size[0] - position) >= this.options.fireDeltaDistance) {
            _popViewStack.call(this);
        } else {
            var item = this._viewStack[this._viewStack.length-1];
            var preItem = this._viewStack[this._viewStack.length-2];
            item.mod.setTransform(Transform.translate(position, 0, 0));
            preItem.mod.setOpacity(position / this._size[0]);
        }
    }

    function _popViewStack() {
        this._state = STATES.FIRED;
        this.hide(null, function() {
            this._state = STATES.IDLE;
        });
    }

    function _revertTracking() {
        this._state = STATES.FIRED;
        this.show(null, function() {
            this._state = STATES.IDLE;
        });
    }

    module.exports = ViewController;
});

