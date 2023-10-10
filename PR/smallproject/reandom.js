let a = function () {
      let dg = "0123456789ABCDEF"
      let abcd = "#";
      for (let index = 0; index < 6; index++) {
            abcd += dg[Math.floor(Math.random() * 4)]            
      }
      return abcd

}
a()

console.log(a());

const rendomCOlor = function () {
      let hex = "0123456789ABCDEF"
      let color = ""
      for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)]
      }
      return color
}
rendomCOlor()
console.log(rendomCOlor());
