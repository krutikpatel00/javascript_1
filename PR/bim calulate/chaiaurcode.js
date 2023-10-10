let form = document.querySelector('form');
form.addEventListener('submit', function (e) {
      e.preventDefault();
      let weidth = document.querySelector('#weight').value;
      let height = document.querySelector('#height').value;
      let results = document.querySelector('#results');

      if (height === '' || height < 0 || isNaN(height)) {
            results.innerHTML = `place give height ${height}`;
      } else if (weidth === '' || weidth < 0 || isNaN(weidth)) {
            results.innerHTML = `place give weidth ${weidth}`;
      } else {
            let bmi = (weidth / ((height * height) / 10000)).toFixed(2);

            results.innerHTML = `bmi : ${bmi}`;
      }
});
