const { fetchMyIP } = require("./iss");
const { fetchCoordsByIp } = require("./iss");
const { fetchISSFlyOverTimes } = require("./iss");
const { nextISSTimesForMyLocation } = require('./iss');


const printPassTimees = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimees(passTimes);
});




// nextISSTimesForMyLocation((error, passTimes) => {
//   if(error) {
//     return console.log("It didn't work!", error);
//   }
//   console.log(passTimes)
// })

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("99.230.142.173", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   // coords = coordinates
  
//   console.log("It worked! Returned coordinates:", coordinates);
// });

// const exampleCoords = { latitude: 43.6667, longitude: -79.3804 };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });