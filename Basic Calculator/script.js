function calculate() {

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let result = document.getElementById("result");
    let answer;


    if (operator === "+") {

        answer = number1 + number2;

    }
    else if (operator === "-") {

        answer = number1 - number2;

    }
    else if (operator === "*") {

        answer = number1 * number2;

    }
    else if (operator === "/") {

       
            answer = number1 / number2;
    

    }
    else if (operator === "%") {

        answer = number1 % number2;

    }
    result.innerHTML = "Result: " + answer;
}

