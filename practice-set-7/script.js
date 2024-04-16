let life = {
  name: "Saaqib Mohammed",
  age: 21,
  gender: "Male",
  occupation: "Software Engineer",
  hobbies: ["Sports ", " Music ", " Cooking"],
  location: "Bangalore",
};

// let product = {
//     name : "Allsafe",
//     price : 10000,
//     description : "All safe is a cyber security company",
//     whatWeDo : function(){
//         console.log(this.name),
//         console.log(this.price)
//         console.log(this.description)
//     }
// }

// product.whatWeDo()

document.querySelector("#details").innerHTML = `
<div id="kuchbhi">
    <p>Name : ${life.name}</p>
    <p>Age : ${life.age}</p>
    <p>Gender : ${life.gender}</p>
    <p>Occupation : ${life.occupation}</p>
    <p>hobbies : ${life.hobbies}</p>
    <p>location : ${life.location}</p>
</div>
`;
// ---------------------------------------------------------------------------------------

// the below code are for learning:

// let mynta = {
//     company : "Stepshine",
//     product : "Mynta",
//     price : 10000,
//     description : "Mynta is a cyber security company",
//     whatWeDo : function(){
//         console.log(this.company),
//         console.log(this.product),
//         console.log(this.price)
//         console.log(this.description)
//     }
// }

// let khala = {name : "Umme Salma"}

// let didi = khala;

// console.log(khala)
// console.log(didi)

// didi.name = "Ayesha Multani";

// console.log(khala)
// console.log(didi)

// let didi2 = {
//     name : "shana thasnim",
//     age : 24,
//     gender : "female",
//     occupation : "Software Engineer",
//     hobbies : ["Sports ", " Music ", " Cooking"],
//     location : "Bangalore",
// };

// let {occupation} = didi2;

// console.log(occupation)

// let employee = {
//     message : "good job",
//     status : "completed",
// }

// let {message, status} = employee;

// console.log(message)
// console.log(status)

// let product = {
//   name: "Jeans",
//   size: "s",
//   fit: "Slim fit",
//   "delivery-time": "same day delivery",
// };

// function isIdenticalProduct(product1, product2) {
//   if (typeof product1 !== "object" || typeof product2 !== "object") {
//     console.warn("Parameter passed was not an object");
//     return false;
//   }

//   if (product1 == product2) {
//     return true;
//   }

//   if (product1.name === product2.name && product1.size === product2.size && product1.fit === product2.fit) {
//     return true;
// }
// else{
//     return false
// }

// }



// let product2 = {
//     name: 'Jeans',
//     size: 'M',
//     fit: 'Slim Fit',
//     'delivery-time': 'Same day delivery',
//   };

//   let product3 = {
//     name: 'Jeans',
//     size: 'M',
//     fit: 'Slim Fit',
//     'delivery-time': 'Same day delivery',
//   };

//   console.log(isIdenticalProduct(product, ''));
//   console.log(isIdenticalProduct(product, product));
//   console.log(isIdenticalProduct(product, product2));
//   console.log(isIdenticalProduct(product3, product2));
//   console.log(isIdenticalProduct(product2, product3));