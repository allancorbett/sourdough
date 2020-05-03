const total = document.getElementById("total");
const starter = document.getElementById("starter");
const flour = document.getElementById("flour");
const hydration = document.getElementById("hydration");
const water = document.getElementById("water");
const saltPc = document.getElementById("salt");
const saltG = document.getElementById("salt-weight");

let s = starter.value;
let f = flour.value;
let h = hydration.value;
let w = water.value;
let spc = saltPc.value;
let sg = saltG.value;
let t = total.value;

s = 150;
f = 300;
h = 60;
w = 240;
t = 1040;
spc = 1;
sg = (spc / 100) * t;

starter.value = parseFloat(s);
flour.value = parseFloat(f);
hydration.value = parseFloat(h);
water.value = parseFloat(w);
total.value = parseFloat(t);
saltPc.value = parseFloat(spc);
saltG.value = parseFloat(sg);

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
salt.addEventListener("change", upSpc);
function upSpc(e) {
  spc = parseFloat(e.target.value);
  calc();
}

function calc() {
  let calcW = parseFloat((s / 2 + f) * (h / 100) - s / 2);
  let calcT = parseFloat(s + f + w);
  let calcSg = parseFloat((spc / 100) * t);
  water.value = calcW.toFixed(1);
  total.value = calcT + calcSg;
  saltG.value = calcSg.toFixed(1);
}
