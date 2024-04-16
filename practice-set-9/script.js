let arr = [
    { name: 'saqib', gender: "male", age: 21, occupation : "Software Engineer", locality : "Bangalore"},
    { name: 'Ayesha Multani', gender: "female", age: 21, occupation : "Software Engineer", locality : "Bangalore"},
    { name: 'Aishwarya', gender: "female", age: 21, occupation : "Software Engineer", locality : "Bangalore"},
    { name: 'Jinsha Jafar', gender: "female", age: 21, occupation : "Software Engineer", locality : "Bangalore"},
];

let detailsContainer = document.querySelector("#details");
arr.forEach(person => {
    let element = document.createElement('div');
    element.textContent = `Name: ${person.name}, Gender: ${person.gender}, Age: ${person.age}, Occupation: ${person.occupation}, Locality: ${person.locality}`;
    detailsContainer.appendChild(element);
});


// console.log(Array.isArray(arr))
// console.log(arr.length)
// arr.push({ name: 'Batman', gender: "male", age: 21, occupation : "Software Engineer", locality : "Bangalore"})
// console.log(arr)

// arr.pop(5)

// let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// // console.log(arr2)

// // arr2.splice(3, 4)

// // console.log(arr2)


// Loops concepts


// While Loop Concept
// let num = 1;

// while (num <= 10){
//     console.log(num)
//     num = num + 1;
// }


// do while loop concept

// let num = 0;

// do {
//     console.log(num)
//     num++;
// } while(num <=10);

// For loop concept

// let data = 0;

// for(data = 0; data <=15; data++) {
//     console.log(data)
// }

// let nums = [2, 4, 6, 8, 10, 56, 23, 43, 32];

// for(let i = 0; i < nums.length; i++) {
//     console.log(nums[i])
// }

// let num = [3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// let sum = 0;

// for(let i = 0; i < num.length; i++){
//     sum += num[i];
// }

// console.log(sum)

// let square = [];

// for(let i = 0; i < num.length; i++){
//     square.push(num[i] * num[i]);
// }

// console.log(square)


// for(let i = 0; i < 50; i++){
//     console.log(i)
//     if(i === 40){
//         break;
//     }
// }

// let test = [1,2,3,4,5,6,7,8,9]

// for(let i = 0; i < test.length; i++){
//     if(test[i] === 7){
//         console.log(`Number fount at index of ${i}`)
//         break;
//     }
// }

// for(let i = 0; i < 25; i++) {
//     if(i % 2 == 0){
//         continue
//     }else{
//         console.log(i)
//     }
// }


// for (let t = 0; t <20; t++){
//     if(t % 2 == 0){
//         continue
//     }else{
//         console.log(t)
//     }
// }

// let danish = [5,6];

// danish.push(7);
// danish.unshift(4)
// console.log(danish)


// function getElement(arr1, index){
//     return arr1[index -1];
// }

// let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// console.log(getElement(arr1, 4))


// function arrCopy(arr1){
//     return arr1.slice(0, arr1.length)
// }

// let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// let arr2 = arrCopy(arr1)

// arr2[0] = null;

// console.log(arr1)
// console.log(arr2)

// function isPrime(num){
//     for (let i = 2; i < num; i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// let num = 2;
// let i = 0;

// while(true){
//     if(isPrime(num)){
//         console.log(num)
//         i++;
//         if(i >=5){
//             break;
//         }
//     }
//     num++;
// }


// for(let i = 10; i >= 0; i--){
//     console.log(i)}

// let nums = [1, -6, 5, 7, -98];

// for (let i = 0; i < nums.length; i++){
//     if(nums[i] < 0) continue;
//     console.log(nums[i])
// }

let arr2 = ["Saqib" , "is the", "Best man", "alive", "on the planet earth"];

let result = '';

for(let i = 0; i <arr2.length; i++) {
    result += arr2[i] +' ';
}

console.log(result)

console.log(arr2.join(' '));