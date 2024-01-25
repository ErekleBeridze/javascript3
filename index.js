console.log("hello world");

//N1
// function dadebiti(numbers) {
//     let sum = 0;
  
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > 0) {
//         return sum = sum + numbers[i];
//       }
//     }
//   }

//   let result = dadebiti [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];
//   console.log(result);


//N2
function numbers(num1, num2, num3, num4, num5, num6, num7, num8, num9) {
 return num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9
}
let result = numbers(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(result);

//N3
let user = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
  }

  function log() {
    if (user.isloggedin == true){
        console.log(user.firstname, user.lastname); 
    }
    else{
        console.log(false);
    }    
}
 log()


//N4


//N5
function evenOdd(cipri) {
 cipri = 10
 if(cipri % 2 === 0){
    console.log("this number is even");
}
else{
    console.log("this number is odd");
}
}
evenOdd()

 //N6
 let array = [1, 2, 3, 4, 5];
 let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log("Original Array", array);
console.log("Reversed Array", reversedArray);


//N7
function asaki(){
    age = 19
    if(age > 18){
        console.log("სრულწლოვანი");
    }
    else{
        console.log( "არასწულწლოვანი");
    }
}
asaki()

//N8
function shedareba(num1, num2){
    num1 = 26 
    num2 = 16

    if(num1 > num2) {
        console.log("num1 is the largest");
    }
    else if(num2 > num1) {
        console.log("num2 is the largest");
    }
    else{
        console.log("error");
    }
}
shedareba()
