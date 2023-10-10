let btn = document.querySelectorAll(".button")
let bosy = document.querySelector("body")

btn.forEach(element => {
      console.log(element);
      element.addEventListener("click", function (e) {
            console.log(e);
            console.log(e.target);
            if (e.target.id === "grey") {
                  bosy.style.backgroundColor = e.target.id
            }
            if (e.target.id === "white") {
                  bosy.style.backgroundColor = e.target.id
            }
            if (e.target.id === "blue") {
                  bosy.style.backgroundColor = e.target.id
            }
            if (e.target.id === "yellow") {
                  bosy.style.backgroundColor = e.target.id
            }
            if (e.target.id === "red") {
                  bosy.style.backgroundColor = e.target.id
            }
      })
});