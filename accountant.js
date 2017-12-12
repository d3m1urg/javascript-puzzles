/*
    An accountant is still unable to sum things up.
    It's either an invalid result or even not a number.
    Add some code so that the final sum will fit.
    Mission is accomplished if console.log() at line #18 runs.
    NOTE: it's prohibited to modify the code of the IIFE itself.
 */

(function accountant() {
    const balance = [1,2,,4,5];
    let sum = 0;
    for (let i = 0; i < balance.length; i++) {
        sum += balance[i];
    }
    if (sum !== 15) {
        throw new Error(`Oh no! It's all wrong again!`);
    }
    console.log(`Yep! It's correct:-)`);
})();
