function areaRectangle() {
    let a = +document.getElementById('numberA').value;
    let b = +document.getElementById('numberB').value;

    let rectangle = a * b;
    document.getElementById('result').innerHTML = `Diện tích hình chữ nhật là ${rectangle}`;
}