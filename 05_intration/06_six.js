
let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newMy = myNum.filter((ing) => {
//       return ing
// })

// console.log(newMy);

// let a = []
// myNum.forEach((nau) => {
//       if (nau > 4) {
//             a.push(nau)
//       }
// })

// console.log(a);


let books = [
      {
            bookName: "book 1",
            genre: "history",
            pulblis: 2001
      },
      {
            bookName: "book 2",
            genre: "fiction",
            pulblis: 2022
      },
      {
            bookName: "book 3",
            genre: "sci",
            pulblis: 2023
      },
      {
            bookName: "book 4",
            genre: "fiction",
            pulblis: 2022
      },
      {
            bookName: "book 5",
            genre: "sci",
            pulblis: 2023
      },
      {
            bookName: "book 6",
            genre: "history",
            pulblis: 2001
      },
]

let bookUse = books.filter((i) => i.pulblis === 2022)

console.log(bookUse);

let gen = books.filter((i) => {
      return i.genre === "history"
})
console.log(gen);