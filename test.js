
/*
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
*/

function berechneErgebnis() {
  var operation = getInput('operation'); // plus, minus, ...
  var wert1 = getWert1();
  var wert2 = getWert2();
  var resultat = 0;
  if(operation == "plus") {
    resultat = wert1 + wert2;
  } else if(operation == "minus") {
    resultat = wert1 - wert2;
  } else if(operation == "mal") {
    resultat = wert1 * wert2;
  } else if(operation == "geteilt") {
    resultat = wert1 / wert2;
  } else if(operation == "prozent") {
    resultat = wert1 * wert2 / 100;
  }
  setResultat(resultat);
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

function getInput(name) {
  return document.getElementById(name).value
}
function getInputZahl(name) {
  return parseFloat(getInput(name))
}
function setInput(name, wert) {
  document.getElementById(name).value = wert;
}
