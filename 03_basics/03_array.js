let usename = {
      myName: "king",
      id: 9,
      mesesage: function () {
            console.log(`hello ${this.myName} welcome`);
            console.log(this);
      }
}
// console.log(usename);
// console.log(usename.mesesage());
// usename.myName = "krutik"
// console.log(usename.mesesage());

// console.log(this);

// function chi() {

//       console.log(this);
// }
// chi()


// function chi() {
//       let name = "sd";
//       console.log(this.name);
// }
// chi()

// let chi = () => {
//       let name = "sd";
//       console.log(this.name);
// }
// chi()



// let a = (b) => b + 1
let a = (b) => (b + 1)
let c = (b) => ({ name: "krutk" })
console.log(a(4));
console.log(c());