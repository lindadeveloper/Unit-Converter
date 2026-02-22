/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const result3 = document.getElementById("result3")
const unitInput = document.getElementById("unit-input")

convertBtn.addEventListener("click", function(){
    let feet = unitInput.value*3.281
    let meters = unitInput.value/3.281
    let gallons = unitInput.value*0.264
    let liters = unitInput.value/0.264
    let pounds = unitInput.value*2.204
    let kilos = unitInput.value/2.204
    result1.textContent = `${unitInput.value} meters = ${feet.toFixed(3)} feet | ${unitInput.value} feet = ${meters.toFixed(3)} meters`
    result2.textContent = `${unitInput.value} liters = ${gallons.toFixed(3)} gallons | ${unitInput.value} gallons = ${liters.toFixed(3)} liters`
    result3.textContent = `${unitInput.value} kilos = ${pounds.toFixed(3)} pounds | ${unitInput.value} pounds = ${kilos.toFixed(3)} kilos`
})