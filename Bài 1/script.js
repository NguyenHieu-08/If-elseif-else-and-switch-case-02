function convertTemperature() {
    let C = +document.getElementById('doC').value;

    if(C != '') {
        document.getElementById('result').innerHTML= C * 9/5 + 32;
    } else {
        document.getElementById('result').innerHTML= 'Bạn cần nhập số';
    }
}