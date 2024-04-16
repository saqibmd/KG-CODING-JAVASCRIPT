function calculator() {
    let result = "";

let value = document.querySelector("#display").value = result

let one = document.querySelector("#calc-one").addEventListener("click", () => {
    result += "1";
    value = document.querySelector("#display").value = result;
})
let two = document.querySelector("#calc-two").addEventListener("click", () => {
    result += "2";
    value = document.querySelector("#display").value = result;
})
let three = document.querySelector("#calc-three").addEventListener("click", () => {
    result += "3";
    value = document.querySelector("#display").value = result;
})
let four = document.querySelector("#calc-four").addEventListener("click", () => {
    result += "4";
    value = document.querySelector("#display").value = result;
})
let five = document.querySelector("#calc-five").addEventListener("click", () => {
    result += "5";
    value = document.querySelector("#display").value = result;
})
let six = document.querySelector("#calc-six").addEventListener("click", () => {
    result += "6";
    value = document.querySelector("#display").value = result;
})
let seven = document.querySelector("#calc-seven").addEventListener("click", () => {
    result += "7";
    value = document.querySelector("#display").value = result;
})
let eight = document.querySelector("#calc-eight").addEventListener("click", () => {
    result += "8";
    value = document.querySelector("#display").value = result;
})
let nine = document.querySelector("#calc-nine").addEventListener("click", () => {
    result += "9";
    value = document.querySelector("#display").value = result;
})
let zero = document.querySelector("#calc-zero").addEventListener("click", () => {
    result += "0";
    value = document.querySelector("#display").value = result;
})
let plus = document.querySelector("#plus").addEventListener("click", () => {
    result += " + ";
    value = document.querySelector("#display").value = result;
})
let minus = document.querySelector("#minus").addEventListener("click", () => {
    result += " - ";
    value = document.querySelector("#display").value = result;
})
let multiply = document.querySelector("#multiply").addEventListener("click", () => {
    result += " * ";
    value = document.querySelector("#display").value = result;
})
let divide = document.querySelector("#divide").addEventListener("click", () => {
    result += " / ";
    value = document.querySelector("#display").value = result;
})
let equal = document.querySelector("#equal").addEventListener("click", () => {
    let final = eval(result); // Assuming `result` is properly defined elsewhere
    value = document.querySelector("#display").value = final; // Assigning `final` to the `value`
});

let clear = document.querySelector("#clear").addEventListener("click", () => {
    result = "";
    value = document.querySelector("#display").value = result;
})
let decimal = document.querySelector("#decimal").addEventListener("click", () => {
    result += " . ";
    value = document.querySelector("#display").value = result;
})
}

calculator()