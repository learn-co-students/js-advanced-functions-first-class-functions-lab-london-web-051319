// Code your solution in this file!


const returnFirstTwoDrivers = function(arrayOfDrivers) {
  return [arrayOfDrivers[0], arrayOfDrivers[1]];
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
  return [arrayOfDrivers[arrayOfDrivers.length-2], arrayOfDrivers[arrayOfDrivers.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (number) => {
  return (fare) => {
  return fare * number;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
  if(func == returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
  } 
  else if(func == returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers);
  }
}