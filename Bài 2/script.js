function convertFeet() {
    let m = +document.getElementById('met').value;

    if(m != '') {
        document.getElementById('result').innerHTML= m*3.2808;
    } else {
        document.getElementById('result').innerHTML= 'Bạn nên nhập số';
    }
}