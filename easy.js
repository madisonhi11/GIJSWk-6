// Write a function that takes in an array of numbers and outputs the average of all the numbers. 

const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([5,25,3,14,50]));
console.log(average([89,25,79,100,90]));
console.log(average([98,100,87,94,100]));