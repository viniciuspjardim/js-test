function func1(hasInventoryAvailable, isRx, isRxInvEnabled, isStoreOnly) {
  return (hasInventoryAvailable || (isRx && !isRxInvEnabled)) && !isStoreOnly;
}

function func2(hasInventoryAvailable, isRx, isRxInvEnabled, isStoreOnly) {
  if (isStoreOnly) {
    return false;
  }

  if (isRx && !isRxInvEnabled) {
    return true;
  }

  return hasInventoryAvailable;
}

const tests = [
  [true, true, true, true],
  [true, true, true, false],
  [true, true, false, true],
  [true, true, false, false],
  [true, false, true, true],
  [true, false, true, false],
  [true, false, false, true],
  [true, false, false, false],
  [false, true, true, true],
  [false, true, true, false],
  [false, true, false, true],
  [false, true, false, false],
  [false, false, true, true],
  [false, false, true, false],
  [false, false, false, true],
  [false, false, false, false],
];

for (const test of tests) {
  console.log(`${test}: func1: ${func1(...test)}, func2: ${func2(...test)}`);
}
