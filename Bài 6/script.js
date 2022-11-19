function phuongTrinhBac1() {
    let numA = +document.getElementById('numberA').value;
    let numB = +document.getElementById('numberB').value;

    if (numA != 0 && numB != 0) {
        document.getElementById('result').innerHTML = `Phương trình có nghiệm duy nhất là ${-numB/numA}`;
    } else if (numA == 0 && numB==0){
        document.getElementById('result').innerHTML = "Phương trình vô số nghiệm";
    } else {
        document.getElementById('result').innerHTML = "Phương trình vô nghiệm";
    }
}