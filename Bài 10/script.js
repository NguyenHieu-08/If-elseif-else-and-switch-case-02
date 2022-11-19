function electricityPrice() {
    let numA = +document.getElementById('price').value; 

    if (numA<=50) document.getElementById('result').innerHTML = "Tiền điện tháng này là: "+ numA * 1678;
    else if (numA<=100) document.getElementById('result').innerHTML = "Tiền điện tháng này là: "+ ((50 * 1678 + (numA - 50) * 1734)) * 1.1;
    else if (numA<=200) document.getElementById('result').innerHTML = "Tiền điện tháng này là: "+ ((50 * (1678 + 1734) + (numA - 100) * 2014)) * 1.1;
    else if (numA<=300) document.getElementById('result').innerHTML = "Tiền điện tháng này là: "+ ((50 * (1678 + 1734) + 100 * 2014 + (numA - 200) * 2536)) * 1.1;
    else if (numA<=400) document.getElementById('result').innerHTML = "Tiền điện tháng này là: "+ ((50 * (1678 + 1734) + 100 * (2014 + 2536) + (numA - 300) * 2834)) * 1.1;
    else document.getElementById('result').innerHTML = "Tiền điện tháng này là: "+ ((50 * (1678 + 1734) + 100 * (2014 + 2536) + 300 * 2834 + (numA - 400) * 2927)) * 1.1;
}