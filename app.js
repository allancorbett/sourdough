const bread = document.getElementById("bread");
const starter = document.getElementById("starter");
const flour = document.getElementById("flour");
const hydration = document.getElementById("hydration");
const water = document.getElementById("water");
const saltPc = document.getElementById("salt");
const saltG = document.getElementById("salt-weight");

let s = starter.value;
let f = flour.value;
let h = hydration.value;
let w = water.textContent;
let spc = saltPc.value;
let sg = saltG.textContent;
let b = bread.textContent;

s = 300;
f = 500;
h = 60;
w = 240;
b = 1050;
spc = 1;
sg = (spc / 100) * b;

starter.value = parseFloat(s);
flour.value = parseFloat(f);
hydration.value = parseFloat(h);
water.textContent = parseFloat(w);
bread.textContent = parseFloat(b);
saltPc.value = parseFloat(spc);
saltG.textContent = parseFloat(sg);

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
  let calcB = parseFloat(s + f + w);
  let calcSg = parseFloat((spc / 100) * calcB);
  water.textContent = calcW.toFixed(1);
  bread.textContent = calcB + calcSg;
  saltG.textContent = calcSg.toFixed(1);
}
