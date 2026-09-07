function calculateBMI() {

    // Get values from input
    let weight = Number(
        document.getElementById("weight").value
    );

    let height = Number(
        document.getElementById("height").value
    );

    // Get result element
    let result = document.getElementById("result");


    // Check input
    if (weight <= 0 || height <= 0) {

        result.innerHTML =
            "Please enter valid weight and height.";

        return;
    }


    // Convert height from cm to meter
    let heightMeter = height / 100;


    // BMI Formula
    let bmi = weight / (heightMeter * heightMeter);


    // Round BMI to 2 decimal places
    bmi = bmi.toFixed(2);


    // Check weight category
    if (bmi < 18.5) {

        result.innerHTML =
            `Your BMI is ${bmi}<br>
             Your weight is low`;

    }
    else if (bmi < 25) {

        result.innerHTML =
            `Your BMI is ${bmi}<br>
             Your weight is normal`;

    }
    else {

        result.innerHTML =
            `Your BMI is ${bmi}<br>
             Your weight is high`;

    }
}