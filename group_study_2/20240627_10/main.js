// 1번
// 합을 저장할 변수 초기화
let sum = 0;

// 1부터 100까지의 숫자를 반복하는 for문
for (let i = 1; i <= 100; i++) {
    sum += i; // 현재 숫자를 합에 추가
}

// 결과 출력
console.log("1부터 100까지의 합:", sum);

// 2번
// 1부터 100까지 반복하는 for문
for (let i = 1; i <= 100; i++) {
    // 현재 숫자가 홀수인지 확인
    if (i % 2 !== 0) {
        console.log(i); // 홀수일 경우 출력
    }
}

//3번
// 1부터 50까지 반복하는 for문
for (let i = 1; i <= 50; i++) {
    // 현재 숫자를 문자열로 변환
    let numberStr = i.toString();
    // "짝"의 개수를 저장하는 변수
    let clapCount = 0;

    // 숫자의 각 자릿수를 확인
    for (let char of numberStr) {
        if (char === '3' || char === '6' || char === '9') {
            clapCount++;
        }
    }

    // "짝" 또는 숫자 출력
    if (clapCount > 0) {
        console.log("짝".repeat(clapCount));
    } else {
        console.log(i);
    }
}

//4번
function isPrime(num) {
    // 1 이하의 숫자는 소수가 아님
    if (num <= 1) {
        return false;
    }

    // 2는 소수임
    if (num === 2) {
        return true;
    }

    // 2를 제외한 짝수는 소수가 아님
    if (num % 2 === 0) {
        return false;
    }

    // 주어진 숫자의 제곱근까지의 홀수로 나누어 떨어지면 소수가 아님
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    // 위의 모든 조건을 통과하면 소수임
    return true;
}

// 예제 출력
console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(4));   // false
console.log(isPrime(29));  // true
console.log(isPrime(50));  // false

/* noona dap

for문 정답들

문제 1

let sum = 0
for(let i=1;i<=100;i++){
 sum+=i
}
console.log(sum)

문제 2

for(let i=1;i<=100;i+=2){
  console.log(i)
}

문제 3 (이 문제는 풀이 강의가 따로 있습니다! 보너스트랙 확인!)

for(let i=1;i<=50;i++){
  let stringValue = i.toString() // 숫자 타입을 string 타입으로 바꾸는 함수 
  let result = ""
  for(let j=0;j<stringValue.length;j++){
    if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
      result+="짝"
    }
  }
  console.log(result.length>0?result:i)
}

문제 4

let n =11
let isPrime = true

if (n ===1){// 1은 소수가 아님 
    isPrime = false
}else{
    for(let i=2;i<n;i++){
      if(n % i == 0){
        isPrime =  false 
      }
    }
}

console.log(isPrime)