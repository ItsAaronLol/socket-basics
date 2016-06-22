var moment = require('moment');
var now = moment(); //get the time now

// console.log(now.format());
// console.log(now.format('X')); //seconds since january first 1970
// console.log(now.format('x')); //milliseconds since january first 1970
// console.log(now.valueOf()); //number
//format outputs strings

var timestamp = 1466585482300;
var timestampMoment = moment.utc(timestamp); //local representation


console.log(timestampMoment.local().format('h:mm a'));

// now.subtract(1, 'year');

// console.log(now.format())
// console.log(now.format('MMM Do YYYY, h:mma')); // Oct 5th 2015, 6:45 pm