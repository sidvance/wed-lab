////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

 let lovesCode = true;
 if (lovesCode = true){
  console.log("I love to code!")
 }else{
  console.log("Coding has its challenges.")
 }

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log 
  '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//QUESTION how can I assign different variables to different outcommes? How can I make my first set of code work?? 

// if (amysAge > brittanisAge || amysAge < brittanisAge){
//   console.log(`${name} is older`)
// }else{
//   console.log("They're the same age!!!")
// }

if (amysAge > brittanisAge){
  console.log("Congrats Amy you old dog!!!")
}else if (brittanisAge > amysAge){
  console.log("Brittani's looking old!!!")
}else {
  console.log("They're the same age!!!")
}

////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. 
  If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not 
  born in the same year'
*/

if (brittanisBirthYear === amysBirthYear){
  console.log("They were born in the same year, what are the odds")
}else{
  console.log("They weren't born in the same year yikes")
}

////////// PROBLEM 4 //////////

let temperature = 55;
let rain = true;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for 
  the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. 
  If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket 
  and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

if (temperature > 80 && rain === true){
  console.log("Crop top and moccosin time")
}else if (60 < temperature < 80 && rain === true){
  console.log("Look at you, you cute little rubber ducky")
}else if (60 > temperature && rain === true){ 
   console.log("Stay inside. Forever")
}else{
  console.log("It's your lucky day, starshine. Go outside and make a friend")
}

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/


for (x = 0; x < 10; x++){
  console.log("Hello")
}


////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, 
  on the first iteration it would log 1, on the second 
  iteration it would log 2.
*/

for (c = 1; c < 11; c++){
  console.log(c)
}

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first
   iteration it would log 10, on the second iteration it would log 9.
*/

for (c = 10; c >= 0; c--){
  console.log(c)
}
//why does the commparison operator have to come before the equals sign??
//Code wasn't logging when c === 0


////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score
   variable above is below passingScore. In each iteration of the loop, increase
    the score by one. If your code is successful, you will see your logged 
    statement 7 times.
*/

while (score < passingScore){
  console.log("your score is not high enough")
  score++
}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, 
  if it is true, change the status to false, 
  if it is false, change the status to true.

*/

let changeMyMind = true;

if (changeMyMind === true){
  console.log(changeMyMind = false)
}else if(changeMyMind === false){
  console.log(changeMyMind = true)
}else{
  console.log("Undefined object")
}

//how can it be written more effectively??

////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind 
// to true (it should currently be set to false due to the if-else statement
// in Problem 9). After you change the value of changeMyMind, 
// console.log it's new value (it should now read true).


//  if (changeMyMind != true){
//     changeMyMind = true 
//   console.log(changeMyMind)
//  }

if (changeMyMind !== true){
  console.log(changeMyMind = true)
}else if(changeMyMind !== false){
  console.log(changeMyMind = false)
}else{
  console.log("Undefined object")
}

////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5;
// // Create a while loop that continues to run while z is greater than 0. 
// Within the while loop, log a countdown from the value of z to 1. 
// Once you have logged the countdown, make sure you decrement z by 1. 
// If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

 while (z > 0){
  for (let c = z; c > 0; c--)
   console.log(c)
  z--
}
