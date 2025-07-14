const form = document.querySelector('form');
const note = document.querySelector("#note");

form.addEventListener('submit', function (event) {
    //it prevents the default submission of the form when we click on submit
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    //checks
    if (height === '' || height < 0 || isNaN(height)) {
        console.log(`Please enter valid height ${height}`);
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        console.log(`Please enter valid weight ${weight}`);
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</bmi>`;
        if (bmi < 18.6) {
            note.innerHTML = `Note : According to BMI  you are Under Weight.`;
        }
        else if (bmi >= 18.8 && bmi <= 24.9) {
            note.innerHTML = `Note : According to BMI  you have Normal Weight.`;
        }
        else if (bmi > 24.9) {
            note.innerHTML = `Note : According to BMI  you are Over weight.`;
        }
        
    }

});