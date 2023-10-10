// # Primitive

// 7 type => String, Number , Boolearn , null , undefined ,  symbol ,Binint

let id = Symbol(15)
let id1 = Symbol(15)
console.log(id === id1);

const big = 4553453654n //Binint
// # non-primitive

//  array ,object ,fuctions   

let a = [1, 2, 3, 4, 5]
let b = {
      name: "kkgk",
      age: 45
}

// let myfucation = function () {
//       console.log("krutik");
// }


//***************** ******************** */

// stack (primitive) ,heap  (non-primitive)
// stack (primitive)
let myname = 'krutik'

let yourname = myname
yourname = "king"
console.log(yourname); // orginal value cheghe nahi hoti

// heap  (non-primitive)

let s = {
      email: "king",
      phone: 456
}
console.log(s);

s.email = "krutik"

console.log(s);
