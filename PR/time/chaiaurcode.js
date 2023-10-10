let colck = document.getElementById('clock');
setInterval(function () {
      let date = new Date()
      colck.innerHTML = date.toLocaleTimeString()
}, 1000)
