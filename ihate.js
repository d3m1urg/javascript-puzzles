/**
* This is a hater function and it's confident that "haters gonna hate",
* especially when it's even elements of an array.
* @todo Remove any SINGLE symbol from the code below so the function won't
* hate the provided input.
* @hint Вы все сделали правильно, если после удаления одного символа 
* выполнится console.log().
*/
(function iHate(arr) {
  'use strict';
  let pointer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      pointer = i || i + 2;
      if (!arr[pointer] && pointer < arr.length) {
        throw new Error('I hate zeroes and undefined!!!');
      }
    }
  }
  console.log('Love it when there\'s no zeroes or undefined!');
})([0,0,1,0,0,0,1]);
