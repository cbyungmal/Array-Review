//Declare and initalize a variable with an empty array 
var arr = [];

//Use bracket notation to add
  //a string to the first index
  //a boolean to the second index
  //a number to the fourth index

//String
firstLetterofLastName = firstName['J']
//Boolean
firstLetterofLastName = firstName(J){
  [true]
}
//Number
123 // one-hundred twenty-three


//When you console.log the third and fourth indices 
//what is the value?
var obj = {
0: 1,
1: 2,
'jamar': 'smart', 
'': 'empty string'
};

console.log(obj[0], obj[1], obj['jamar'], obj['']);

//What is the length of the array?
4

//Use the push method to insert a string of your favorite tv show.
const tvShows = ['blacklist', 'lucifer', 'flash'];

const count = tvShows.push('arrow');
console.log(count);
// expected output: 4
console.log(tv shows);
// expected output: Array ["blacklist", "lucifer", "flash", "arrow"]

tvShows.push('prodigal son', 'inhumans', 'runaways');
console.log(tv shows);
// expected output: Array ["blacklist", "lucifer", "flash", "arrow", "prodigal son", "inhumans", "runaways"]


//Use the unshift method to add three values
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


//console.log the array


//




//Practice problems

/*
1. Write a function that will return the number 
   after the input number.

Example:
nextNum(4) => 5
nextNum(100) => 101

*/

function nextNum(number){
  //CODE BELOW HERE
{
        int rev_num = 0;
        while (num > 0) {
            rev_num = rev_num * 10 + num % 10;
            num = num / 10;
        }
        return rev_num;
    }


  //CODE ABOVE HERE
}





/*
2. Write a function that can count the number of 
   vowels in a string.

EXAMPLE:
  countVowels('hello') => 2
  countVowels('stop') => 1

*/

function countVowels(string){
  //CODE BELOW HERE
  counter <- 0
  for (i in phrase) {
    if ((i == 'a') | (i == 'e') | (i == 'i') | (i == 'o') | (i == 'u')) {
      counter <- counter + 1 
    }   
  }

  //CODE ABOVE HERE
}

/*
3. Write a function that will return if a given 
   array has an even number of indicies.

EXAMPLE:
var myArray = [0,1,2,3]
var otherArray = [0,1,2,3,4]

evenIndicies(myArray) => true
evenIndicies(otherArray) => false
*/


function evenIndicies(array){
  //CODE BELOW HERE
for (int i = 0; i < array.length; i++) {
  if (i % 2 == 0) {
  System.out.print(array[i]);
  }
}

  //CODE ABOVE HERE
}