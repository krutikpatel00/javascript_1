let user = {
      myName: "krutik",
      login: 8,
      sing: true,
      getuserDetile: function () {
            // console.log("got detile");
            // console.log(this.myName);
            // console.log(this);
      }
}
// console.log(user.myName);
// console.log(user.getuserDetile());     

// let promiseOne =  new Promise()
// let date =  new Date()

function useK(myName, login, sing) {
      this.myName = myName
      this.login = login
      this.sing = sing
      return this
}

let a = useK("king", 12, 8)
let b = useK("krutik", 2, 8)
console.log(a);
console.log(b);