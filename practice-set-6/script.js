// FUNCTION WITH RETURN STATEMENT

// function determineDrivingStatus(){
//     let age = 32;
//     let status;

//     if(age >= 18){
//         status = "Eligible";
//     }else{
//         status = "Not Eligible";
//     }
//     return status;
// }

// console.log(determineDrivingStatus())

// FUNCTION WITH PARAMETER STATMENT

// function sum (a, b){
//     return a + b;
// }

// console.log(sum(34, 56))

// FUNCTION WITH THE PARAMETER STATEMENT AND DEFAULT VALUES

// function greeting(name = "Pyaare"){
//     return `Hello ${name} uncle ji`;
// }

// console.log(greeting("danish"))

// ----------------------------------------------------------------------------------------------------------------------

// Write a function that accepts a two input number's from user and check which one is odd and which one is even.

// document.querySelector("#button").addEventListener("click", ()=>{
//     let data1 = document.querySelector("#num1").value;
//     let data2 = document.querySelector("#num2").value;

//     let num1Type = data1 % 2 === 0 ? "even" : "odd";
//     let num2Type = data2 % 2 === 0 ? "even" : "odd";

//     document.querySelector("#result").innerHTML = `Number 1 is ${num1Type}, and Number 2 is ${num2Type}.`;
// })

// ----------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------

// Write a function that accepts a two input number's from user and check which one larger number.

document.querySelector("#button").addEventListener("click", ()=>{
    let data1 = document.querySelector("#num1").value;
    let data2 = document.querySelector("#num2").value;

    if(data1 > data2){
        document.querySelector("#result").innerHTML = `Number 1 is (${data1}) bigger then Number 2 : (${data2}).`;
    }
    else if(data2 > data1){
        document.querySelector("#result").innerHTML = `Number 2 is (${data2}) bigger then Number 1 : (${data1}).`;
    }
    else{
        document.querySelector("#result").innerHTML = `Both Number 1 (${data1}) and Number 2 : (${data2}) are equal .`;
    }
})