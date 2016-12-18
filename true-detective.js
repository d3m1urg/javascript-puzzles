/**
 * This function is a true detective. It's solving a very confusing
 * case right now. All evidences are collected but it's still
 * impossible to find who's commited the crime.
 * @todo  Find which evidence (variable) has the wrong type and 
 * confuses the investigation.
 */
(function trueDetective(m, f, o, c, q, a, b, u, r, p) {
  switch (true) {
    case m && f:
      console.log('Gotcha!');
      break;
    case o && c:
      console.log('Gotcha!');
      break;
    case q && a:
      console.log('Gotcha!');
      break;
    case b && u:
      console.log('Gotcha!');
      break;
    case r && p:
      console.log('Gotcha!');
      break;
    default:
      console.log('Has no clue!');
  }
})(Boolean(+[]), ['0'], !!{}, false, -1, false, ~'false', [!+!!null], ![1], true);
