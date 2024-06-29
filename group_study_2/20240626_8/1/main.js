document.getElementById('checkButton').addEventListener('click', function() {
    const userNumber = parseFloat(document.getElementById('userNumber').value);
    const resultElement = document.getElementById('result');

    if (isNaN(userNumber)) {
        resultElement.textContent = '유효한 숫자를 입력하세요.';
    } else if (userNumber > 0) {
        resultElement.textContent = '입력한 숫자는 양수입니다.';
    } else if (userNumber < 0) {
        resultElement.textContent = '입력한 숫자는 음수입니다.';
    } else {
        resultElement.textContent = '입력한 숫자는 0입니다.';
    }
});
