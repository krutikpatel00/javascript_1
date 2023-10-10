let myman = ["raju", "hile", "krutik"]
let fimale = ["kiran", "rachi", "sonu"]

myman.push(fimale)
// console.log(myman);

let a = myman.concat(fimale)
// console.log(a);
// console.log(myman);
// console.log(fimale);

let new1 = [...myman, ...fimale]
// console.log(new1);

let athorarray = [1, 1, 1, [2, 2, 2], [4, 4, 4,]]
let ator1 = athorarray.flat()
// console.log(ator1);

// console.log(Array.isArray("krutik"));
// console.log(Array.from("krutik"));
// console.log(Array.from({ name: "krutik" })); //intrasting

let scor1 = 100;
let scor2 = 200;
let scor3 = 300;

// console.log(Array.of(scor1, scor2, scor3));

