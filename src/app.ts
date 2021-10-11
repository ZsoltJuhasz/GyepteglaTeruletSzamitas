const inputDiameter = document.querySelector("#diameter") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;

const calcButton = document.querySelector("#calcButton");

function calcArea(diameter: number): number {
    let radius = diameter / 2;
    let area = Math.pow(radius,2) * Math.PI;
    let areaPart = area / 2;
    return areaPart;
}

calcButton.addEventListener('click', event => {
    let diameter = Number(inputDiameter.value);
    let areaPart = calcArea(diameter);
    console.log("Működik");
    //console.log(areaPart);
    result.value = String(areaPart.toFixed(2));
});