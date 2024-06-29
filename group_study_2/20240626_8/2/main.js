document.getElementById('gradeButton').addEventListener('click', function() {
    const score = parseFloat(document.getElementById('score').value);
    const gradeResultElement = document.getElementById('gradeResult');

    let grade;

    if (isNaN(score) || score < 0 || score > 100) {
        gradeResultElement.textContent = '유효한 점수를 입력하세요 (0-100).';
        return;
    }

    if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score < 90) {
        grade = 'B';
    } else if (score >= 70 && score < 80) {
        grade = 'C';
    } else if (score >= 60 && score < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    gradeResultElement.textContent = `점수: ${score}, 등급: ${grade}`;
});
