let key = document.querySelector(".key")

window.addEventListener("keydown", (e) => {
      key.innerHTML = `
      <table class= "color">
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
      `
})