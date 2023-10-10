

// let consl

// function abc() {
//       if (true) {
//             let a = "a"
//             const b = "b"
//             var c = "c"
//       }
//       console.log(c);
//       // console.log(a);
//       // console.log(b);
// }
// abc(true)


// tamplate string

// let abc = "lorem is best"
// let b = ` javascrit ${abc}`
// console.log(b);

// new string method

// let abc = "javascript"

// console.log(`${abc}`.startsWith("j"));
// console.log(`${abc}`.endsWith("t"));
// console.log(`${abc}`.includes(""));
// console.log(`${abc} `.repeat(10));


// destructuring array
// es5
// let abc = [1, 2, 3, 4, 5]

// console.log(abc[0]);
// console.log(abc[1]);
// console.log(abc[2]);
// console.log(abc[3]);
// console.log(abc[4]);

// es6

// let [a, b, c, d, e] = abc

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//  a to b ,  b to a value chenge //only one line

// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log(`a is ${a} b is ${b}`);


// destracuring object

// let obj = {
//       obj1: 1,
//       obj2: 2,
//       obj3: 3,
//       obj4: {

//             myName: "krutik",
//             age: 21
//       }
// }
// let { obj1, obj2, obj3, obj4 } = obj
// console.log(`${obj1} ${obj2} ${obj4.myName}`);


// fat arrow function

// let abc = (a, b) => {
//       let c = a + b;
//       return c
// };
// abc();
// console.log(abc(1, 2));


// default paramenter 
// es6
// function abcd(a, b = 5) {
//       console.log(a + b);
//       return
// }
// abcd(5)

// rest parameter
// function abc(...s) {
//       console.log(s);
//       let totle = 0
//       for (const key of s) {
//             totle += key
//       }
//       console.log(totle);
// }
// abc(1, 2, 3, 4, 5)

// let a = (...s) => {
//       console.log(...s);
//       let totle = 0
//       for (const key of s) {
//             totle += key
//       }
//       console.log(totle);
// }
// a(1, 2, 3, 4, 5, 5)

// spread opertor

let a = [1, 2, 3, 4]

let abc = (...s) => {
      console.log(...s);
      let totle = 0
      for (const key of s) {
            totle += key
      }
      console.log(totle);
}
abc(...a)

// replace concat
// let d = [1, 2, 3, 4]
// let e = ["a", "b", "c", "d"]

// d = [...d, ...e]
// console.log(d);


// replase copy

// let arr = [1, 2, 3, 4]
// let arr2 = [...arr, 2, 5]
// arr2.push(1, 2,4)
// console.log(arr);
// console.log(arr2);




