
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
  if (isNaN(resultat)) {
    resultat = "Das Krümelmonster ist traurig.";
  } else if(!isFinite(resultat)) {
    resultat = "Grösser als alles was es gibt (oder kleiner)."
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
