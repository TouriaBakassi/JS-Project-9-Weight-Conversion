//                               Weight-Conversion

let input = document.querySelector("input");
let result = document.querySelector("#result");

// console.log(Wkg);
input.addEventListener("keypress", function (e) {
  let Pounds = Number(input.value);
  let Wkg = (Pounds / 2.2).toPrecision(4);
  if (e.key == "Enter") {
    result.textContent = `${Wkg} kg;`
  }
});