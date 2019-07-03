// Code your solution in this file!

const returnFirstTwoDrivers = arr => {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = arr => {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return fare => {return fare * int}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, funcSelect){
    return funcSelect(arr)
} 

