// array
let myArr = [1, 2, 3, 4, 5, 6]

let myhero = ["superman", "betman"]

let mynew = [1, 5, true, () => { console.log("krutik"); }]
// console.log(myArr);
// console.log(myhero);
// console.log(mynew);

// array method

myArr.push(9)
// console.log(myArr);


myArr.pop()
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);

myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(4)); 
//check kartahe ki he ay nahi

// console.log(myArr.indexOf(9)); 
// indext naber bata ta he

let mynewarry = myArr.join()
// console.log(mynewarry);

let my1 = myArr.slice(1, 3) // slice me value bija array value copythay 6
console.log(my1);
console.log(myArr);

let my2 = myArr.splice(1, 3) // splice ma je value se te bija array maaavijay 6 

console.log(my2);

console.log(myArr);