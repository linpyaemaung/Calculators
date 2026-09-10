function calculateBMI() {
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
let result = document.getElementById("result");


    if (weight == 0 || height == 0) {
        result.innerHTML = "Please enter valid weight and height.";
        return;
    }

let heightInMeter = height / 100;
let bmi = weight / (heightInMeter * heightInMeter);
bmi=bmi.toFixed(2);
let category;

if (bmi < 18.5) {
    category = "Underweight";
}
else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
}
else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
}
else {
    category = "Obese";
}


    result.innerHTML = `
        <h5>Your BMI: ${bmi}</h5>
        <p>Category: ${category}</p>
    `;
}