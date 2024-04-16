// let sum = function(num1, num2){
//     return num1 + num2;
// }

// let sumThreeNumbers = function(num1, num2, num3, sumTwoNumbers){
//     let sum1 = sumTwoNumbers(num1 , num2);
//     return sumTwoNumbers(sum1 , num3);
// }

// console.log(sumThreeNumbers(1, 2, 3, sum));


// ----------------------------------------------------------------------------

// let sum = (num1, num2) =>{
//     return num1 + num2;
// }

// let sumThreeNumbers = (num1, num2, num3, sumTwoNumbers) => {
//     let sum1 = sumTwoNumbers(num1, num2);
//     return sumTwoNumbers(sum1, num3);
// }

// console.log(sumThreeNumbers(1, 2, 3, sum));

// -------------------------------------------------------------------------------------


// let square = num => num * num;


// console.log(square(7));

// let alarm = () => console.log("Ayesha Multani is is my favorite!");

// // let timerID = setTimeout(alarm, 1000);
// // console.log(`Alarm set with timer ID ${timerID}`);
// // clearTimeout(timerID);

// let intervalId = setInterval(alarm, 1000);
// setTimeout(()=> clearInterval(intervalId), 6000)


// let foods = ["apple", "orange", "banana", "burger", "pizza"];

// foods.forEach((food)=>{
//     console.log(food);
// } )

// let data = [1,2,3,4,5,6,7,8,9,10,11];

// let odds = data.filter((num, index) => {
//     if(num % 2 === 1){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(odds)

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// let square = arr.map(num =>  num * num
// );

// console.log(square);

// let multiply = function(num1, num2){
//     return num1 * num2;
// }

// console.log(multiply(2, 3));


// let btn = document.querySelector("#kuchbhi");
// let counter = 0;    

// btn.addEventListener("click", ()=>{
//    counter++;
//    if(counter % 2 == 0){
//     btn.classList.add("clicked-twice");
//    } 
//    else{
//     btn.classList.remove("clicked-twice");
//    }
// });


// let printGreeting = () =>{
//     console.log("Assalamualaikum Khala");
// }

// let printTwice = inputFuntion =>{
//     inputFuntion();
//     inputFuntion();
// }

// printTwice(printGreeting);


// let buttonElement = document.querySelector(".kuchbhi");

// buttonElement.addEventListener("click", event => setTimeout(doubleTheSize, 2000))

// function doubleTheSize() {
//     let buttonElement = document.querySelector(".kuchbhi");
//     buttonElement.classList.add("js-clicked-twice");
// }


let arr = [1,2,3,4,5,6,7,8,9];

let sum = 0;

arr.forEach(num => sum += num);

console.log(sum);

let square = arr.map(num =>  num * num);
console.log(square);