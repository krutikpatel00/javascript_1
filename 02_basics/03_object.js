let sym = Symbol("sjge")

let a = {
      name: "krutik",
      age: 45,
      location: "rajkot",
      email: "abc@gmail.com",
      inLogick: true,
      "kingto": "krtuikchodvadiya",
      arry: ["krutik", "king"],
      45: "sd",
      [sym]: sym,
      myf: "dfk"
}
console.log(a);

// console.log(a.arry);
// console.log(a["arry"]);
// console.log(a.email);
// console.log(a."kingto"); not work 
// console.log(a["kingto"]);
// console.log(a[45]);
// console.log(typeof sym);
// console.log(typeof a[sym]);


// chege
a.email = "fgkld@gmail"
// Object.freeze(a) // ab age se cheg nani hoga
a.email = "dfh"
console.log(a);

a.myf = function () {
      console.log(`my name ${this.name}`);
}
console.log(a);
console.log(a.myf());