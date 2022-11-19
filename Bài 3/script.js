function areaSquare() {
    let numb = +document.getElementById('number').value;

    if (numb != '') { 
        document.getElementById('result').innerHTML= 'Diện tích hình vuông là ' + (numb**2); 
    } else {
        document.getElementById('result').innerHTML= 'Nhập số a';
    }
}