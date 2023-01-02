// declare myAge 
let myAge = 17; 
 
//declare earlyYears 
let earlyYears = 2; 
earlyYears *= 10.5; 
 
let laterYears = myAge - 2; // we've already counted two first years, so it left 15 years 
 
laterYears *= 4; // Each year following equates to 4 dog years 
 
let myAgeInDogYears = earlyYears + laterYears; // your human age into dog years 
 
let myName = 'Alex'.toLowerCase(); 
 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
