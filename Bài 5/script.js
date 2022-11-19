function areaTriangle() {
    let a = +document.getElementById('numberA').value;
    let b = +document.getElementById('numberB').value;

    let areaTriangle = ((a * b)/2)* Math.sqrt(1 - Math.pow(a/b,2));
    document.getElementById('result').innerHTML = `Diện tích hình tam giác là ${areaTriangle}`;
}