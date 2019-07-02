const returnFirstTwoDrivers = drivers => {return drivers.slice(0,2)}

const returnLastTwoDrivers = drivers => {return drivers.slice(-2,drivers.length)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return fare => {return fare * int}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}