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

        this._trackingPointer = undefined;
        this._touchSync = new TouchSync();
        this._stateModifier = new StateModifier();

        this._eventInput.pipe(this._touchSync);
        this._touchSync.on('start', ...);
        this._touchSync.on('update', ...);
        this._touchSync.on('end', ...);
    }
    ViewController.prototype = Object.create(AnimationController.prototype);
    ViewController.prototype.constructor = ViewController;

});
