// let promiseOne = new Promise(function (resolve, reject) {
//       // Do an async task
//       // DB calls ,cryptography ,network
//       setTimeout(function () {
//             console.log('async task is compelete');
//             resolve()
//       }, 1000)
// })

// promiseOne.then(function(){
//       console.log("promise consumed");
// })

// 

// new Promise(function (resolve, reject) {
//       // Do an async task
//       // DB calls ,cryptography ,network
//       setTimeout(function () {
//             console.log('async task is compelete');
//             resolve()
//       }, 1000)
// }).then(function () {
//       console.log('colplet work');
// })


// let promiseTwo = new Promise(function (resolve, reject) {
//       setTimeout(function () {
//             resolve({ name: 'krutik', phone: 784581524 })
//       }, 2000)
// })

// promiseTwo.then(function (user) {
//       console.log(user);
// })

// let promiseThree = new Promise(function (resolve, reject) {
//       let error = true
//       if (!error) {
//             resolve({ usename: "krutik", pasoword: 4856446 })
//       } else {
//             reject('ERROR : somthing is rong')
//       }
// })

// promiseThree
//       .then((user) => {
//             console.log(user);
//             return user.usename
//       })
//       .then((usename) => {
//             console.log(usename);
//       })
//       .catch((error) => {
//             console.log(error);
//       }).finally(() =>
//             console.log("resol and reject")
//       )

let promiseFive = new Promise(function (resolve, reject) {
      let error = false
      if (!error) {
            resolve({ usename: "Javascript", pasoword: 4856446 })
      } else {
            reject('ERROR : not javascript')
      }
});

async function consumePromiseFive() {
      try {
            let respose = await promiseFive
            console.log(respose);
      } catch (error) {
            console.log(`ERROR : somthing rong`);
      }
}
consumePromiseFive()

async function getAlluse() {
      try {
            let respose = await fetch('https://github.com/krutikpatel00')
            let date = await respose.json()
            console.log(date);
      } catch (error) {
            console.log(
                  "Error"
            );
      }
}
getAlluse()