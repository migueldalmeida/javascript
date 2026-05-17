let startform = document.querySelector("#start");
let endform = document.querySelector("#end");
let stepform = document.querySelector("#steps");
let button = document.querySelector("#button");
let result = document.querySelector("#res");
button.addEventListener("click", calcular);
function calcular() {
  let start = Number(startform.value);
  let end = Number(endform.value);
  let step = Number(stepform.value);
  if ( startform.value.length == 0 || endform.value.length == 0 || stepform.value.length == 0) 
    {
    alert("[ERRO] Faltam dados!");
    return;
  }
  if (step === 0) {
    alert("Insira um numero de passos validos");
    return;
  }
  result.innerHTML = "";
  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      result.innerHTML += i + " 👉 ";
      if (i + step > end) {
        result.innerHTML += " 🏁 ";
      }
    }
  } else {
    for (let i = start; i >= end; i -= step) {
      result.innerHTML += i + " 👉 ";
      if (i - step < end) {
        result.innerHTML += " 🏁 ";
      }
    }
  }
}
