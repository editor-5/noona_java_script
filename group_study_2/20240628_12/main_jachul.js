//함수문제
//1번

function greet(){
    console.log("안녕 내이름은 제시카야")
}

greet()

//2번

function greet(name){
    console.log("안녕 내 이름은",name,"야")
}

greet("에밀리")
greet("할리")

//3번

function greet(name) {
    return "안녕 내 이름은 " + name + "야";
  }
  
  // 함수 호출 및 결과 출력
  const message = greet("제시카");
  console.log(message);
//4번
  /*
  인자를 세개 받습니다.
  첫번째 인자는 년도에 해당하는 숫자입니다.
  두번째 인자는 월에 해당하는 숫자입니다.
  세번째 인자는 일에 해당하는 숫자입니다.
  년도 인자만 받았을 경우 -> "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
  년도, 월, 인자를 받았을경구 -> 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을 리턴 해주세요
  년도, 월, 일 인자를 전부 받았을경우 -> 년도, 월, 일을 조합해서 "1234/5/6"과 같은 형식의 문자열을 리턴 해주세요 
  */
  function birthDay(year, month, date) {
    if (date !== undefined) {
      return `${year}/${month}/${date}`;
    }
    if (month !== undefined) {
      return `${year}년 ${month}월`;
    }
    if (year !== undefined) {
      return `${year}년`;
    }
  }
  
  // 예제 호출
  console.log(birthDay(2022, 1, 1)); // 출력: "2022/1/1"
  console.log(birthDay(2022, 1)); // 출력: "2022년 1월"
  console.log(birthDay(2022)); // 출력: "2022년"
  
  //5번

  function findSmallestElement(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return Math.min(...arr);
  }
  
  let smallestNumber = findSmallestElement([100, 200, 3, 0, 2, 1]);
  console.log(smallestNumber); // 출력: 0
  
  //6번
let unit = [50000, 10000, 5000, 1000, 500, 100];

function changeCalculate(money) {
  let result = {};
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]);
    result[unit[i]] = num;
    money -= unit[i] * num;
  }
  return result;
}

let change = changeCalculate(12300);
for (let [key, value] of Object.entries(change)) {
  console.log(`${key} X ${value}`);
}