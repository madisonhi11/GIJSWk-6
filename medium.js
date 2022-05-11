// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
// beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on 
// Arrays to aid in working through this problem. 

numList = [45,52,6,77,0,1,2];

var indexOne = numList.indexOf(10);
console.log (indexOne);

var indexTwo = numList.indexOf(2);
console.log (indexTwo);

var indexThree = numList.indexOf(77);
console.log (indexThree);

var indexFour = numList.indexOf(45);
console.log (indexFour);

var indexFive = numList.indexOf(23);
console.log (indexFive);