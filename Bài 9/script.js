function checkTriangle() {
    let numA = +document.getElementById('numberA').value;
    let numB = +document.getElementById('numberB').value;
    let numC = +document.getElementById('numberC').value;
    

    if (numA > 0 && numB > 0 && numC > 0) {
        if(numA + numB > numC && numA + numC > numB && numB + numC > numA) {
            document.getElementById('result').innerHTML = 'Đây là tam giác';
        }
    }  else {
        document.getElementById('result').innerHTML = 'Đây không phải là tam giác'
    }
}