function phuongTrinhBac2() {
    let numA = +document.getElementById('numberA').value;
    let numB = +document.getElementById('numberB').value;
    let numC = +document.getElementById('numberC').value;
    let delta = numB**2 - 4*numA*numC;

    if (delta < 0) {
        document.getElementById('result').innerHTML = 'Phương trình vô nghiệm';
    } else if (delta == 0){
        document.getElementById('result').innerHTML = `Phương trình có nghiệm duy nhất là ${-numB/(2*numA)}`;
    } else {
        document.getElementById('result').innerHTML = `Phương trình có 2 nghiệm, x1= ${(-numB - Math.sqrt(delta))/(2 * numA)}; x2 = ${(-numB + Math.sqrt(delta))/(2 * numA)}`;
    }
}