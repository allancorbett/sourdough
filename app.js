const total = document.getElementById("total");
const starter = document.getElementById("starter");
const flour = document.getElementById("flour");
const hydration = document.getElementById("hydration");
const water = document.getElementById("water");

let s = starter.value;
let f = flour.value;
let h = hydration.value;
let w = water.value;
let t = total.value;

s = 300;
f = 500;
h = 60;
w = 240;
t = 1040;

starter.value = parseFloat(s);
flour.value = parseFloat(f);
hydration.value = parseFloat(h);
water.value = parseFloat(w);
total.value = parseFloat(t);

starter.addEventListener("change", upS);
function upS(e) {
  s = parseFloat(e.target.value);
  calc();
}

flour.addEventListener("change", upF);
function upF(e) {
  f = parseFloat(e.target.value);
  calc();
}

hydration.addEventListener("change", upH);
function upH(e) {
  h = parseFloat(e.target.value);
  calc();
}

function calc() {
  let calcW = parseFloat((s / 2 + f) * (h / 100) - s / 2);
  let calcT = parseFloat(s + f + w);
  water.value = calcW;
  total.value = calcT;
}
