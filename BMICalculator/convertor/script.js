 function convertLbToKg() {
        let lb = document.getElementById("lb").value;
        let kg = lb * 0.453592;
        let kgResult = document.getElementById("kgResult");
        kgResult.innerHTML = `<h5>Weight: ${kg.toFixed(2)} kg</h5>`;
        
        }

function convertHeightToCm() {
    let feet = Number(document.getElementById("feet").value);
    let inches = Number(document.getElementById("inches").value);
    let cmResult = document.getElementById("cmResult");

    let totalInches = (feet * 12) + inches;
    let cm = totalInches * 2.54;

    cmResult.innerHTML = `<h5>Height: ${cm.toFixed(2)} cm</h5>`;
}