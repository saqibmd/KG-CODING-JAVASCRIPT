document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".submitButton").addEventListener("click", ()=>{
        let age = document.querySelector("#age").value;
        let gender = document.querySelector('input[name="gender"]:checked').id;
        if(age <=5){
            document.querySelector("#finalprice").innerHTML = "Your price ticket will be free"
        }
        else if(age >5 && age <=8 || age >8 && age <=65 && gender == "female"){
            document.querySelector("#finalprice").innerHTML = "Your price ticket will be $50"
        }
        else if(age >=65){
            document.querySelector("#finalprice").innerHTML = "Your price ticket will be $30"
        }
        else if(age >8 && age <=65 && gender == "male"){
            document.querySelector("#finalprice").innerHTML = "Your price ticket will be $100"
        }
    })
    
});
