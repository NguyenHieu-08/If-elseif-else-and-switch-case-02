function checkAge() {
    let age = +document.getElementById('age').value;

    if(age > 0 && age < 120) {
        document.getElementById('result').innerHTML= `Tuổi của bạn là ${age}`;
    } else {
        document.getElementById('result').innerHTML= 'Tuổi mà con người không thể đạt được';
    }
}