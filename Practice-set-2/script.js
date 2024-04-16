document.querySelector("#submitButton").addEventListener("click", ()=>{
    let age = document.querySelector("#ageInput").value;

    if(age >= 18){
        document.querySelector("#result").innerHTML = "Age " + age + " is eligible for the voting process"
    }
    else if(age < 18 && age > 0){
        document.querySelector("#result").innerHTML = "Age " + age + " is not eligible to vote.";
    }else {
        document.querySelector("#result").innerHTML = " Invalid input! Please enter a valid number of years old.";
    }
});