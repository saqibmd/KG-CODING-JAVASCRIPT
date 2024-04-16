let details = {
  name: "Saaqib Mohammed",
  age: 21,
  gender: "Male",
  occupation: "Software Engineer",
  hobbies: ["Sports ", " Music ", " Cooking"],
  location: "Bangalore",
};

localStorage.setItem("about", JSON.stringify(details));

console.log(localStorage.getItem("about"));

let product2 = JSON.parse(localStorage.getItem("about"));
console.log(product2);

// console.log(typeof details);
// console.log(details);

// let str = JSON.stringify(details);
// console.log(typeof str);
// console.log(str);

// let obj = JSON.parse(str);

// console.log(typeof obj);
// console.log(obj);

// localStorage.setItem("user", "Ayesha Multani");


let date = new Date();
localStorage.removeItem("user");

document.querySelector("#aboutdamntime").innerHTML = `
<div id="aboutdamntime">
<p>About Damn Time : ${date} </p>
</div>
`;

function test(person = ' Dear') {
    // Your code here
    let date = new Date();
    let hours = date.getHours();

    let heading = document.querySelector("#simple");

    if (hours >= 0 && hours < 12) {
        heading.innerHTML = `Good Morning! ${person}`;
    } else if (hours >= 12 && hours < 18) {
        heading.innerHTML = `Good Afternoon! ${person}`;
    } else {
        heading.innerHTML = `Good Night! ${person}`;
    }
};

test(" Saaqib")


let noOfTimesClicked = localStorage.getItem("noOfTimesClicked") || 0;
function buttonPressed(){

noOfTimesClicked++;
localStorage.setItem("noOfTimesClicked", noOfTimesClicked);

updateButton();
}


function updateButton(){
    let button = document.querySelector("#my-button");
if(noOfTimesClicked % 2 === 0){
    button.classList.remove("js-odd");
    button.classList.add("js-even");
}
else{
    button.classList.remove("js-even");
    button.classList.add("js-odd");
}
button.innerHTML = `Number of Clicked : ${noOfTimesClicked}`
}
updateButton();