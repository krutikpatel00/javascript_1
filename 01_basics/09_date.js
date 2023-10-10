let mydate = new Date()

console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.getMilliseconds());
console.log(mydate.getMonth());
console.log(mydate.getSeconds());
console.log(mydate.getTime());

let a = mydate.toLocaleString("default", {
      // weekday: "short",
      // dateStyle: "long"
      
})
console.log(a);

// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());

// let creaatdate = new Date(2023, 8, 13)
// console.log(creaatdate.toDateString());

let creaatdate = new Date("9-10-2001")
// console.log(creaatdate.toLocaleDateString());

let mytimeStamp = Date.now()

// console.log(mytimeStamp);
// console.log(creaatdate.getTime());


