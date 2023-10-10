let a = [1, 2, 3, 5, 6, 4, 21, 1, 4, 5, 5]
let b = [456, 8545, 4545, 554]

a.forEach(function (index) {
      // console.log(index);
})

a.forEach(element => {
      // console.log(element);
});

a.forEach((index => {
      // console.log(index);
}))



function printMe(items, valu, ary) {
      console.log(items, valu, ary);
}

// a.forEach(printMe)
// b.forEach(printMe)



let obkA = [
      {
            name: "java",
            age: 45
      },
      {
            name: "javascipt",
            age: 25
      },
      {
            name: "css",
            age: 78
      },
      {
            name: "c++",
            age: 96
      }
]

obkA.forEach((index) => {
      console.log(index.name);
});

