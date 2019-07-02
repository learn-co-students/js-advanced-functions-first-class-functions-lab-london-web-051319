// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  const [d1, d2] = arr;
  return [d1, d2];
}

const returnLastTwoDrivers = function(arr) {
  const len = arr.length;
  return [arr[len-2], arr[len-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(int) {
  return function(fare) {
    return fare * int;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
