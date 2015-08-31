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

    /**
     * @class
     * @param {Object} [options] Configurable options.
     * @alias module:ViewController
     */
    function ViewController(options) {
        AnimationController.apply(this, arguments);

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
      velocityThreshold: 100,
    };

    var STATES = {
      IDLE     : 0,
      STARTED  : 1,
      TRACKING : 2,
      FIRED    : 3,
    };

    function _touchStart(event) {
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
        var diffX = event.delta;

        switch (this._state) {
          case STATES.STARTED:
            if (diffX > 0) {
              this._state = STATES.TRACKING;
              _updateViews(diffX, velocity);
            }
            break;
          case STATES.TRACKING:
            _updateViews(diffX, velocity);
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

    function _updateViews(diff, velocity) {
      var transDistance;
      var transOpacity;
    }

    function _switchToPreView() {
    }

    function _revertTracking() {
    }
});
