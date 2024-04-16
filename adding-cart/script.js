// let a = 34;

// let b = 23;

// console.log(a % b);


let cartQuantity = 0;

document.querySelector("#test").addEventListener("click", () => {
    cartQuantity + 1;
    document.querySelector("#add-cart").innerHTML = `Your current bag list data : ${cartQuantity}`
})
    

document.querySelector(".button").addEventListener("click", () =>{
    cartQuantity -= 1;
    document.querySelector("#add-cart").innerHTML = `Your current bag list data : ${cartQuantity}`
})

