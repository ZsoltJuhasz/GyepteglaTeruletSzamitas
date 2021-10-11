var inputDiameter = document.querySelector("#diameter");
var result = document.querySelector("#result");
var calcButton = document.querySelector("#calcButton");
function calcArea(diameter) {
    var radius = diameter / 2;
    var area = Math.pow(radius, 2) * Math.PI;
    var areaPart = area / 2;
    return areaPart;
}
calcButton.addEventListener('click', function (event) {
    var diameter = Number(inputDiameter.value);
    var areaPart = calcArea(diameter);
    console.log("Működik");
    //console.log(areaPart);
    result.value = String(areaPart.toFixed(2));
});
