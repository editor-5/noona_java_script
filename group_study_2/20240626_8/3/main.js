문제 1번









let number = -1

if(number<0){
  console.log("음성입니다")
}else if(number > 0){
  console.log("양성입니다")
}else {
  console.log("0입니다")
}

문제 2번















let score =  90
let grade =''
if(90<=score && score<=100){
  grade = "A"
}else if(80<=score && score<=89){
  grade = "B"
}else if(70<=score && score<=79){
  grade ="C"
}else if(60<=score && score<=69){
  grade="D"
}else if(0<=score && score<=59){
  grade="F"
}else {
  console.log("잘못된 범위의 점수입니다")
}
console.log(grade)
문제 3번










let skills = ["HTML","CSS","Javascript","React"]


if(skills.includes("Javascript") && skills.includes("React")){
  console.log("합격!")
}else if(skills.includes("Javascript") || skills.includes("React")){
  console.log("예비")
}else {
  console.log("탈락!")
}



/*
function evaluateSkills() {
    const skillsInput = document.getElementById('skills').value;
    const skills = skillsInput.split(',').map(skill => skill.trim());
    const resultElement = document.getElementById('result');

    if (skills.includes("Javascript") && skills.includes("React")) {
        resultElement.textContent = '축하합니다! 합격하셨습니다.';
    } else if (skills.includes("Javascript") || skills.includes("React")) {
        resultElement.textContent = '조금 더 노력하셔야 합니다. 예비입니다.';
    } else {
        resultElement.textContent = '아쉽지만 탈락하셨습니다. 다음 기회에 도전하세요.';
    }
}
