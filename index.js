// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
   return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
   return drivers.slice(-2);
};

const selectingDrivers = [
   returnFirstTwoDrivers,
   returnLastTwoDrivers
]

function createFareMultiplier(multiplier = 1) {
   return function(fare) {
      return fare * multiplier;
   };
};


// function fareDoubler() {
   //    return function(fare) {
      //       return fare * 2;
      //    };
      // };
      // would work if you called fareDoubler()(fare)
      
      const fareDoubler = createFareMultiplier(2);
      
      const fareTripler = createFareMultiplier(3);
      
      // function fareTripler() {
         //    return function(fare) {
            //       return fare * 3;
            //    };
            // }
            // would work if you called fareTripler()(fare)

function selectDifferentDrivers(array, aFunction) {
   return aFunction(array);
};
