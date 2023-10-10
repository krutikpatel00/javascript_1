let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = myNumber.map((i) => {
//       return i + 10
// })

let newNum = myNumber
      .map((i) => i + 10)
      .map((b) => b + 5)
      .filter((a) => a  > 0)

console.log(newNum);

