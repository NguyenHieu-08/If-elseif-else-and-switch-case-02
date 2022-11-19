function calculateTax() {
    let numA = +document.getElementById('salary').value; 

    if (numA <= 5) document.getElementById('result').innerHTML= "Miễn thuế";
    else if (numA<=10) document.getElementById('result').innerHTML= "Thuế phải đóng là: "+(numA-5)*(5/100);
    else if (numA<=20) document.getElementById('result').innerHTML= "Thuế phải đóng là: "+(5*(5/100)+(numA-10)*(6/100));
    else document.getElementById('result').innerHTML= "Thuế phải đóng là: "+(5*(5/100)+10*(6/100)+(numA-20)*(8/100));
}