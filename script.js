function test(attr1, attr2) {
  let v = 1;
  let c = 10;

  // create a new function that calculate the value
  function calc(attr1, attr2) {
    return v + c;
  }

  return calc(attr1, attr2);
}
