/*
    Cowboy likes to cry 'Yee haaa!' and just can't stand silence.
    Insert one symbol to help cowboy overcome the silence.
    In seven different ways.
    The task is accomplished if 7 ways of solving it are provided.
    Any answer (with respect to other rules) is correct if it makes console.log() in line #13 run.
    NOTE: it's prohibited to remove existing symbols from the code or modify them.
 */

(function cowboy(param, y = null) {
    const x = y = param;
    if (x && typeof x !== 'number') {
        return console.log('Yee haaa!');
    }
    throw new Error(`...[horrible silence]...`);
})(0);
