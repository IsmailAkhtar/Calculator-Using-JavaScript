//function that display value
function dis(val) {
  document.getElementById("nums").value += val;
}

//function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("nums").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

//function that clear the display
function clr() {
  document.getElementById("result").value = "";
  document.getElementById("nums").value = "";
}
