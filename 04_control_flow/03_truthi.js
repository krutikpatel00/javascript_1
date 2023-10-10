let useEmail = "d"

if (useEmail) {
      console.log("true");
} else {
      console.log("false");
}


// false value
// false , 0 , -0 , BigInt 0n, "" , null , undefined ,NaN

// truse value
// true , 1 , [] , " " , {} , "0" , "false" ,function(){}

let arrY = []
if (arrY.length === 0) {
      console.log("trusivaliurl");
}

let obj = {}
if (Object.keys(obj).length === 0) {
      console.log(" y.........");
}


// nullish coalescring operater (??) : null ,undefined

let a;
a = 4 ?? 10
a = null ?? 10 ?? 15
a = undefined ?? 10 ?? 15

console.log(a);



// terniary operater

// condition ? true :false

let box = 100
box > 200 ? console.log("tr") : console.log("fal");
