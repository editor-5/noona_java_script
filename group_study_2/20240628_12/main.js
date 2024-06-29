함수문제 정답
1번

function greet(){
    console.log("안녕 내 이름은 제시카야")
}

2번

function greet(name){
    console.log("안녕 내 이름은",name,"야")
}

3번

function greet(name){
    console.log("안녕 내 이름은",name,"야")
    return name
}
// 결과 확인 법 
const name = greet("지영")
console.log("안녕 내 이름은",name,"이야")

4번

function meetAt(year, month, date) {

  if (date) {
    return `${year}/${month}/${date}`;
  }
  if (month) {
    return `${year}년 ${month}월`;
  }
  if (year) {
    return `${year}년`;
  }

}

console.log(meetAt(2022,1,7))
String 문자열 안에 동적인 값을 넣어주고 싶을 때 ${동적인값}정적인문장을 넣어주면 된다. 그리고 이 문장을 감싸는것은 ""큰따옴표나 ''작은 따옴표가 아닌 `` 백틱이다 (~키보드과 함께 있다)
참고: https://leeborn.tistory.com/entry/JavaScript-ES2015-백틱과-템플릿-문자열

5번

function findSmallestElement(arr) {
	let result = arr[0];
	if (arr.length === 0 ) {
		return 0;
	}
  for (let i = 1;i < arr.length; i++){
		if(result > arr[i]){
			result = arr[i];
		}
	}
	return result;
}

let smallestNumber = findSmallestElement([100,200,3,0,2,1])
console.log(smallestNumber)

6번

let unit = [50000,10000,5000,1000,500,100]
function changeCalculate(money) {
  for(let i=0;i<unit.length;i++){
    
      let num = Math.floor(money / unit[i])
      console.log(unit[i]+"X"+num)
      money = money - (unit[i]*num)
    
  }
}

changeCalculate(12300)