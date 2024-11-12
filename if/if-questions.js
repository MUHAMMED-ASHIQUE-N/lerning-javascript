//1. Use JavaScript to print "Positive" if x is greater than 0, "Negative" if less than 0, and "Zero" if equal to 0

let num = 0;

if (num>0){
    console.log('number is positive')
} else if (num<0){
    console.log('number is negative')
} else {
    console.log('number is zero')
}

console.log("\n");

// //1. Use JavaScript to print "Empty" if str is empty, and "Not Empty" otherwise.



let str = "";
if (str === ""){
    console.log("Empty");
} else {
    console.log('Note empty');
}

console.log("\n");


// //1. Write JavaScript code to print "Small" if age is between 1-10, "Medium" if 11-50, and "Large" if 51 or more.

 let age = 555;

 if (age >=1 && age<=10){
    console.log('small');
 } else if (age >= 11 && age<=50){
    console.log('Medium')
 } else {
    console.log('large')
 }
 console.log("\n");


// // 1. Write JavaScript code to print "Secure" if url starts with "https", and "Insecure" otherwise.


let  url = "httpikjij" ;
if (url.startsWith ("https")){
    console.log("secure");
} else {
    console.log("insecure");
}


console.log("\n");

// Question: Write a JavaScript program to provide weather-related advice based on the current weather conditions.


// Requirements:

// 1. If the weather is "sunny", print "Wear sunscreen".
// 2. If the weather is "rainy", print "Bring an umbrella".
// 3. If the weather is "cloudy", print "Wear a light jacket".
// 4. For any other weather conditions, print "Check the forecast again".





let weather = 'rainy';


if (weather=='sunny') {
    console.log('wear suncreen');
} else if (weather=='rainy'){
    console.log('Bring an umberlla ');
} else if (weather=='cloudy'){
    console.log('Wear a light jacjet ');
} else {
    console.log('"Check the forecast again"');
}


console.log("\n");

// Question: Write a JavaScript program to simulate a traffic light system. Given the current traffic light color, print the corresponding instruction.


// // Requirements:

// // 1. If the traffic light is "green", print "Go!".
// // 2. If the traffic light is "yellow", print "Caution!".
// // 3. For any other color (assuming "red" by default), print "Stop!".



let trafficLight = 'yellow';

if (trafficLight == 'green') {
    console.log('Go');
} else if (trafficLight == 'yellow') {
    console.log('Cuation');
} else {
    console.log('Stop');
}

console.log("\n");



////Question: Write a JavaScript program to print a day-specific message based on the current day of the week.


// Requirements:

// 1. If the day is Monday, print "Back to work!".
// 2. If the day is Friday, print "Almost weekend!".
// 3. If the day is Saturday or Sunday, print "Weekend!".
// 4. For any other day, print "Just another day!".

let day = 'Saturday';

if (day=='monday'){
    console.log('Back to work!')
} else if (day=='Friday'){
    console.log('Almost weekend!')
} else if (day=='Saturday') {
    console.log('Weekend!')
} else (
    console.log('Just another day')
)