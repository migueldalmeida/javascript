let inputnumber = document.querySelector("#numero")
let button = document.querySelector("#botao")
let result = document.querySelector("#res")
button.addEventListener("click", calcular)
function calcular () {
  let number = Number(inputnumber.value)
  result.innerHTML = ""
  for (let i = 1; i <= 10; i++) {
    result.innerHTML += `<option>${number} x ${i} = ${number * i}</option>`
}
}