let bread = document.getElementById("bread"),
  starter = document.getElementById("starter"),
  flour = document.getElementById("flour"),
  hydration = document.getElementById("hydration"),
  water = document.getElementById("water"),
  saltPc = document.getElementById("salt"),
  saltG = document.getElementById("salt-weight");

let s, f, h, w, spc, sg, b;

starter.addEventListener("change", updateS);
flour.addEventListener("change", updateF);
hydration.addEventListener("change", updateH);
salt.addEventListener("change", updateSpc);

if (localStorage.getItem("s") === null) {
  localStorage.setItem("s", 150);
} else {
  s = parseFloat(localStorage.getItem("s"));
}

if (localStorage.getItem("f") === null) {
  localStorage.setItem("f", 250);
} else {
  f = parseFloat(localStorage.getItem("f"));
}
if (localStorage.getItem("h") === null) {
  localStorage.setItem("h", 65);
} else {
  h = parseFloat(localStorage.getItem("h"));
}
if (localStorage.getItem("spc") === null) {
  localStorage.setItem("spc", 1);
} else {
  spc = parseFloat(localStorage.getItem("spc"));
}
if (localStorage.getItem("w") === null) {
  localStorage.setItem("w", 136);
} else {
  w = parseFloat(localStorage.getItem("w"));
}
if (localStorage.getItem("sg") === null) {
  localStorage.setItem("sg", 5.4);
} else {
  sg = parseFloat(localStorage.getItem("sg"));
}
if (localStorage.getItem("b") === null) {
  localStorage.setItem("b", 541);
} else {
  b = parseFloat(localStorage.getItem("b"));
}

starter.value = parseFloat(localStorage.getItem("s"));
flour.value = parseFloat(localStorage.getItem("f"));
hydration.value = parseFloat(localStorage.getItem("h"));
water.textContent = parseFloat(localStorage.getItem("w"));
bread.textContent = parseFloat(localStorage.getItem("b"));
saltPc.value = parseFloat(localStorage.getItem("spc"));
saltG.textContent = parseFloat(localStorage.getItem("sg"));

function updateS(e) {
  s = parseFloat(e.target.value);
  localStorage.setItem("s", s);
  calc();
}

function updateF(e) {
  f = parseFloat(e.target.value);
  localStorage.setItem("f", f);
  calc();
}

function updateH(e) {
  h = parseFloat(e.target.value);
  localStorage.setItem("h", h);
  calc();
}
function updateSpc(e) {
  spc = parseFloat(e.target.value);
  localStorage.setItem("spc", spc);
  calc();
}

function calc() {
  calcStarter = s / 2;
  calcFlour = calcStarter + f;
  calcHydration = h / 100;
  calcW = calcFlour * calcHydration - calcStarter;
  let w = parseFloat(calcW.toFixed(0));
  calcB = s + f + w;
  calcSg = (spc / 100) * calcB;
  let sg = parseFloat(calcSg.toFixed(1));
  calcTotalBread = calcB + calcSg;
  let b = parseFloat(calcTotalBread.toFixed(0));
  bread.textContent = b;
  saltG.textContent = sg;
  water.textContent = w;
  localStorage.setItem("b", b);
  localStorage.setItem("sg", sg);
  localStorage.setItem("w", w);
}
