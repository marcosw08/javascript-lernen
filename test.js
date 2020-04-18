function test() {
  setInput('outputTest', Date());
}
function plus() {
  setResultat(getWert1() + getWert2());
}
function minus() {
  setResultat(getWert1() - getWert2());
}
function mal() {
  setResultat(getWert1() * getWert2());
}
function geteilt() {
  setResultat(getWert1() / getWert2());
}
function prozent() {
  setResultat(getWert1() * getWert2() / 100);
}
function wurzel() {
  setResultat2(Math.sqrt(getWert3()))
}

function getWert1() {
  return getInputZahl('feld1');
}
function getWert2() {
  return getInputZahl('feld2');
}
function getWert3() {
  return getInputZahl('feld3');
}

function setResultat(resultat) {
  setInput('resultat', resultat);
}
function setResultat2(resultat) {
  setInput('resultat2', resultat);
}

function getInput(name) {
  return document.getElementById(name).value
}
function getInputZahl(name) {
  return parseFloat(getInput(name))
}
function setInput(name, wert) {
  document.getElementById(name).value = wert;
}
