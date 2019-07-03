// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers_array){
    return drivers_array.slice(0,2);
}

const returnLastTwoDrivers = function(drivers_array){
    return drivers_array.slice(drivers_array.length-2, drivers_array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(number){
    return function(value){
        return number * value;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, whichDrivers){
    return whichDrivers(drivers)
}