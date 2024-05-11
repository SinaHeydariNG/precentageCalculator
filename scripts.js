document.addEventListener('DOMContentLoaded', function () {



    const precentageSlider = document.getElementById('precentageSlide')
    const precentageValue = document.getElementById('precentagValue')


    precentageSlider.addEventListener('input', function () {
        precentageValue.textContent = `${precentageSlider.value}%`
    })


})



function calculatePrecentage() {
    const precentageSlider = document.getElementById('precentageSlide').value
    const baseNumber = document.getElementById('baseNumber').value


    if (baseNumber === '') {
        document.getElementById("error-basenumber").textContent = "please add something"
        console.log("False")
        return false
    }
    const result = ((baseNumber * precentageSlider) / 100)
    document.getElementById('result').innerHTML = `result : ${result} `
    console.log("True")
    return true



}


// my_btn = document.getElementById('my_btn')
// my_btn.addEventListener('click', calculatePrecentage())