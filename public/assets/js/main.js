let results = null;
let resultCalc = "";

const resultCalcInput = document.getElementById("resultCalc");

document.getElementById("buttonValReset").addEventListener("click", function() {
    resultCalc = "";
    resultCalcInput.value = resultCalc;
});

document.getElementById("buttonValReturn").addEventListener("click", function() {
    resultCalc = resultCalc.substring(0, resultCalc.lenght - 1);
    resultCalcInput.value = resultCalc;
});

document.getElementById("buttonValModulo").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonValPlus").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonValMinus").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonValMulti").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonValDiv").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonValInverse").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonValDecimal").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonValCalc").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal9").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal8").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal7").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal6").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal5").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal4").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal3").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal2").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal1").addEventListener("click", function() {
    // do something
});

document.getElementById("buttonVal0").addEventListener("click", function() {
    // do something
    results += 0;
    resultCalcInput.value = results;
});