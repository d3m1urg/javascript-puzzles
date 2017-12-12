/*
    Help the sapper to evade the third (and final) mistake in his life.
    What should constant 'command' equals to in order to prevent the explosion?
    Another problem is that the sapper only has time to enter 13 symbols before the explosion.
    The bomb will be deactivated and the task accomplished when console.log() in line #26 runs.
    NOTE: changing or modifying the existing code apart from the 'command' constant is prohibited.
 */

const command = '???';

const bomb = (function bomb() {
    let detonators = 1 | 4 | 2;
    return Object.freeze({
        valueOf: function() {
            detonators &= 4;
            return this;
        },
        toString: function() {
            detonators -= Math.ceil(detonators / 2);
            return this;
        },
        disarm: function() {
            if (detonators) {
                this.explode();
            }
            console.log('Bomb disarmed :-)');
        },
        explode: function() {
            throw new Error('BOOM!!!');
        },
    });
})();

(function sapper(bomb, command) {
    'use strict';
    try {
        eval(command); 
    } catch(e) {
    }
    bomb.disarm();
})(bomb, command);
