function convert() {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let unit = document.getElementById("unitSelect").value;
    let result;

    if (unit === "meter") {
        result = inputValue * 3.28084;
        document.getElementById("result").innerText = result + " feet";
    }
    else if (unit === "feet") {
        result = inputValue / 3.28084;
        document.getElementById("result").innerText = result + " meters"; 
    }
}