// same code of practise array using javascript 

var fruits = ['oranges', 'bananas', 'apples'];
var scores = [98, 85, 91, 78, 82];

var firstFruit = fruits[0];
var thirdScore = scores[2];

console.log('firstFruit:', firstFruit);
console.log('thirdScore:', thirdScore);

// using function making an array of number and desired position or value of array
function returnAnElement(array, index) {
  return array[index];
}

var scores = [98, 85, 91, 78, 82];
var position = 3;
var positionElement = returnAnElement(scores, position);
console.log('positionElement:', positionElement);

// using function making an array of word and getting desired position or value of array

function returnArray(array,index){
  return array[index];
}
var fruits = ["Apples","Banana","orange","apricot", "peach"];
var position = 4;
var positionElement = returnArray(fruits,position);
console.log("positionElement:",positionElement);
