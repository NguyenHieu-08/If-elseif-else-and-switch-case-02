function laiSuat() {
    let numA = +document.getElementById('priceA').value;
    let numB = +document.getElementById('priceB').value;
    let thang03 = 6 / 100;
    let thang06 = 6.4 / 100;
    let thang09 = 6.7 / 100;
    let thang12 = 8.8 / 100;

    if (numB <= 3) document.getElementById('result').innerHTML = "Tổng số tiền sau khi đáo hạn là:" + numA * (1 + thang03);
    else if (numA > 3 && numB <= 6) document.getElementById('result').innerHTML = "Tổng số tiền sau khi đáo hạn là:" + numA * (1 + thang06);
    else if (numA > 6 && numB <= 9) document.getElementById('result').innerHTML = "Tổng số tiền sau khi đáo hạn là:" + numA * (1 + thang09);
    else if (numA > 9 && numB <= 12) document.getElementById('result').innerHTML = "Tổng số tiền sau khi đáo hạn là:" + numA * (1 + thang12);
    else {
        let total = numA * (1 + thang12);
        let i = 12;
        while ((numB - i) >= 12) {
            total = total * (1 + thang12);
            i = i + 12;
        }
        document.getElementById('result').innerHTML = "Tổng số tiền sau khi đáo hạn là:" + total;
    }
}