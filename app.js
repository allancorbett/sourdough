let bread = document.getElementById("bread"),
  starter = document.getElementById("starter"),
  flour = document.getElementById("flour"),
  hydration = document.getElementById("hydration"),
  water = document.getElementById("water"),
  saltPc = document.getElementById("salt"),
  saltG = document.getElementById("salt-weight");

let s = starter.value,
  f = flour.value,
  h = hydration.value,
  w = water.textContent,
  spc = saltPc.value,
  sg = saltG.textContent,
  b = bread.textContent;

if (localStorage.getItem("s") === null) {
  localStorage.setItem("s", 150);
} else {
  s = 150;
}
if (localStorage.getItem("f") === null) {
  localStorage.setItem("f", 250);
} else {
  f = 250;
}
if (localStorage.getItem("h") === null) {
  localStorage.setItem("h", 66.6);
} else {
  h = 66.6;
}
if (localStorage.getItem("spc") === null) {
  localStorage.setItem("spc", 1);
} else {
  spc = 1;
}
if (localStorage.getItem("w") === null) {
  localStorage.setItem("w", 208);
} else {
  w = 208;
}
if (localStorage.getItem("sg") === null) {
  localStorage.setItem("sg", 7.4);
} else {
  sg = 7.4;
}
if (localStorage.getItem("b") === null) {
  localStorage.setItem("b", 747.4);
} else {
  b = 747.4;
}

starter.value = parseFloat(localStorage.getItem("s"));
flour.value = parseFloat(localStorage.getItem("f"));
hydration.value = parseFloat(localStorage.getItem("h"));
water.textContent = parseFloat(localStorage.getItem("w"));
bread.textContent = parseFloat(localStorage.getItem("b"));
saltPc.value = parseFloat(localStorage.getItem("spc"));
saltG.textContent = parseFloat(localStorage.getItem("sg"));

starter.addEventListener("change", upS);
function upS(e) {
  s = parseFloat(e.target.value);
  localStorage.setItem("s", s);
  calc();
}

flour.addEventListener("change", upF);
function upF(e) {
  f = parseFloat(e.target.value);
  localStorage.setItem("f", f);
  calc();
}

hydration.addEventListener("change", upH);
function upH(e) {
  h = parseFloat(e.target.value);
  localStorage.setItem("h", h);
  calc();
}
salt.addEventListener("change", upSpc);
function upSpc(e) {
  spc = parseFloat(e.target.value);
  localStorage.setItem("spc", spc);
  calc();
}

function calc() {
  let calcW = parseFloat((s / 2 + f) * (h / 100) - s / 2);
  let calcB = parseFloat(s + f + w);
  let calcSg = parseFloat((spc / 100) * calcB);
  let calcTotalBread = calcB + calcSg;
  bread.textContent = calcTotalBread.toFixed(1);
  saltG.textContent = calcSg.toFixed(1);
  water.textContent = calcW.toFixed(1);
  localStorage.setItem("w", calcW.toFixed(1));
  localStorage.setItem("b", calcB + calcSg);
  localStorage.setItem("sg", calcSg.toFixed(1));
}
