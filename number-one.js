/*
    This function wants to be number one. Help it.
    Modify the existing code so that console.log() at line #12 runs.
    NOTE: it's prohibited to modify code starting from line #9 (including it).
 */
(function isNumberOne(one) {
  
    function numberOne() {
        if (this !== 1) {
            throw new Error(`Oh no! I'm not number one!!!:-((((`);
        } else {
            console.log(`I'm definitely number ONE!`);
        }
    }

    numberOne.call(one);

})(1);
