let fruit = ["banaan", "apple", "sinaasappel","grape","mango]"]

console.log(fruit)
console.log(fruit[3])

fruit[0]="cherry"
console.log(fruit)

fruit.pop()
console.log(fruit)

fruit.push("fineapple")
console.log(fruit)

//includes : 아이템이 있는지 없는지 확인
console.log(fruit.includes("apple"))

// index번호확인
console.log(fruit.indexOf("apple"))

// index 짜르기
console.log(fruit.slice(1,3))

fruit.splice(0,2) 
console.log(fruit)

let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]
// gpt 정답
// 어레이에 마지막 아이템 “Zebra” 제거하기
animals.pop();
console.log(animals)
// 어레이에 마지막 아이템 “Zebra” 제거하기
animals.push("Dog");
console.log(animals);
//주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals.push("Mosquito", "Mouse", "Mule");
console.log(animals);
// 해당 어레이에는 "Human"이 있는가?
let hasHuman = animals.includes("Human");
console.log(hasHuman);
// 해당 어레이에는 “Cat” 이 있는가?
let hasCat = animals.includes("Cat");
console.log(hasCat);
// "Red deer"을 "Deer"로 바꾸시오
let index = animals.indexOf("Red deer");
if (index !== -1) {
    animals[index] = "Deer";
}
console.log(animals);
// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
let startIdx = animals.indexOf("Spider");
let deleteCount = 3;

if (startIdx !== -1) {
    animals.splice(startIdx, deleteCount);
}
console.log(animals);
// "Tiger"이후의 값을 제거하시오
let startIdx = animals.indexOf("Tiger") + 1; // Find index of "Tiger" and add 1 to start removing from the next element onwards
// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
if (startIdx !== -1) {
    animals.splice(startIdx);
}

console.log(animals);

// 코딩누나정답
// 어레이에 마지막 아이템 "Zebra" 제거하기
animals.pop()
console.log(animals)

// 주어진 어레이에 "Dog" 추가하기
animals.push("Dog")
console.log(animals)

//주어진 어레이에 "Mosquito","Mouse","Mule" 추가하기
animals.push("Mosquito","Mouse","Mule")
console.log(animals)

//해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human"))

//해당 어레이에는 "Cat" 이 있는가?
console.log(animals.includes("Cat"))

//"Red deer"을  "Deer"로 바꾸시오 
animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals)

//"Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오 
animals.splice(animals.indexOf("Spider"),3)
console.log(animals)

// "Tiger"이후의 값을 제거하시오 
animals.splice(animals.indexOf("Tiger"))
console.log(animals)

//"B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(newList)

// 자바기본문법 6 객체지향
let patient = {
    name : "jimin",
    age : 17,
    disease : "cold"
  }
  
  console.log(patient)
  console.log(patient.name)
  console.log(patient.age)
  console.log(patient["age"])
  patient.name = "jk"
  console.log(patient)
  patient["age"] = 25
  console.log(patient)
  
  let patientList = [{name:"jimin", age:13}, {name:"jk", age:25},
                     {name:"jhope", age:40}
                    ];
  console.log(patientList)
  console.log("첫번째 환자는:", patientList[0])
  console.log("첫번째 환자의 나이는?", patientList[0].age)
  console.log("첫번째 환자의 나이는?", patientList[0]["age"])
  console.log("두번째 환자의 이름:", patientList[1].name)

  /*  
if(조건문){
조건이 충족하면 할일들
}  

if(false){
  console.log("조건은 참입니다")
}else {
  console.log("거짓입니다")
}

let age = 17

if(age > 20){
  console.log("운전이 가능합니다")
} else if(age >=18) {
  console.log("오토바이 운전이 가능합니다")
} else { 
  console.log("운전 불가능합니다")
}


let age = 19

if(18<=age && age < 20){
  console.log("오토바이 운전만 가능합니다")
} else if(age > 20) {
  console.log("운전이 가능합니다")
} else { 
  console.log("운전 불가능합니다")
}
*/

let age = 21
let lisence = false

if(age>20){
  if(lisence == true){
    console.log("운전이 가능합니다")
  } else {
    console.log("면허를 따세요")
  }
} else {
  console.log("운전이 불가능합니다")
}

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
let menu = 1

if(menu == 1){
  console.log("물건사기")
}else if(menu == 2){
  console.log("잔고확인")
}else if(menu == 3) {
  console.log("히스토리확인")
}else {
  console.log("홈으로 돌아가기")
}  
*/
let menu = 8
switch (menu){
  case 1:
    console.log("물건사기")
    break;
  case 2:
    console.log("잔고확인")
    break;
  case 3:
    console.log("히스토리확인")
  default :
    console.log("홈으로 돌아가기")
}

let menu = 2

if(menu <= 3){
  console.log("범위안에 숫자입니다")
}else {
  console.log("범위 밖의 숫자입니다")
}  

//삼항연산식 조건?true 일때 : false일때

let answer = menu <= 3 ? "범위안에 숫자입니다" : "범위 밖의 숫자입니다"
console.log(answer)
 
//i=i+1 i++  프린트,증감,조건확인,고
for(let i =0;i<10;i++) {
    console.log("누나 !!",i)
  } 
  
// i+=2 => i=i+2
// i+=1 => i=i+1

for(let i =0;i<=10;i+=2) {
console.log("누나 !!",i)
} 

//구구단 gpt

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
console.log(''); // 각 단의 끝에 빈 줄을 추가하여 가독성을 높입니다.
}
  
for(let i=2;i<=9;i++){
    for(let j=1;j<=9;j++){
      console.log(i+'*'+j+'='+i*j)
    }
}

let i=2
while(i<=9){
  console.log("while문 실행",i)
  i++;
}

let fruit = ["banana","apple","grape","mango"]

for(let i=0;i<fruit.length;i++)){
  console.log(fruit[i])
}


let sum = 0; // 합을 저장할 변수를 초기화합니다.

for (let i = 1; i <= 100; i++) {
  sum += i; // 현재 i 값을 sum에 더합니다.
}

console.log(`1부터 100까지의 합은 ${sum}입니다.`); // 결과를 출력합니다.

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
문제 4 ?

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

문제 4 ? gpt
let n = 0.7;
let isPrime = true;

if (n === 1) { // 1은 소수가 아님
    isPrime = false;
} else if (n === 2) { // 2는 소수
    isPrime = true;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break; // 소수가 아니면 더 이상 검사할 필요가 없으므로 루프 종료
        }
    }
}

console.log(isPrime);

let fruit=
  ['apple','banana','orange','grape','pear']

for(let i=0;i<fruit.length;i++){
  console.log('누나가 좋아하는 과일은',fruit[i])
}

//for ... of
for(let item of fruit){
    console.log('누나가 좋아하는 과일은 of',item)
}

let sentence = '나는 사과를 좋아합니다'

for (let char of sentence){
  console.log('char',char)
}

//for in 동적인 객체 에 값을 접근할때

let fruit=
  ['apple','banana','orange','grape','pear']

let person = {
  name: 'John',
  age:25,
  cute: true,
}


for (let key in person){
  console.log('key',key)
}

function makeBurger(type,size,num){
    console.log('매개변수 값은?',type)
    console.log('빵두기')
    console.log('상추두기')
    if(num < 1){
      return '버거 개수가 0개입니다'
    }
    if(type == '불고기'){
      console.log('고기패티두기')
    } else if(type == '새우'){
      console.log('새우패티두기')
    }  
    console.log('뚜껑덥기')
    console.log(type, '버거', size, '사이즈', num, '개 준비완료')
  
    return '완료되었습니다.'
  }
  
  function serveCoke(){
    console.log('콜라통 선택')
    console.log('얼음담기')
    console.log('콜라담기')
  }
  
  function servefrenchFries(){
    console.log('감튀박스선택')
    console.log('감튀 담기')
  }
  
  let result = makeBurger('새우','L',0)
  console.log('버거 프로세스 결과',result)
  
  makeBurger('새우','M',1)
  serveCoke()
  servefrenchFries()
  
  function makeSet(){
    makeBurger('새우','M',1)
    serveCoke()
    servefrenchFries()
  }
  
  makeSet()

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
String 문자열 안에 동적인 값을 넣어주고 싶을 때 ${동적인값}정적인문장을 넣어주면 된다. 그리고 이 문장을 감싸는것은 
""큰따옴표나 ''작은 따옴표가 아닌 `` 백틱이다 (~키보드과 함께 있다)
참고: https://leeborn.tistory.com/entry/JavaScript-ES2015-백틱과-템플릿-문자열

//gpt
function meetAt(year, month, date) {
    let result = '';
  
    if (year !== undefined) {
      result += `${year}년`;
    }
    if (month !== undefined) {
      result += ` ${month}월`;
    }
    if (date !== undefined) {
      result += ` ${date}`;
    }
  
    return result.trim(); // 문자열의 양 끝 공백 제거
  }
  
  console.log(meetAt(1970, 5, 10)); // 1971년 8월 2
  console.log(meetAt(1970, 5));    // 1971년 8월
  console.log(meetAt(1970));       // 1971년
  console.log(meetAt());           // 빈 문자열

// 누나코딩해석4번

function meetAt(year,month,date){
  if(year){
    return `${year}/${month}/${date}`
  }else if(year && month){
    return `${year}년 ${month}월`
  }else if(year && month && date){
    return `${year}년`
  }
}

console.log(meetAt(2022,1,7))  
  
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

//5번 누나코딩해석
function findSmallestElement(arr){
  if(arr.length === 0){
    return 0;
  }
  let result = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(result > arr[i]){
      result = arr[i];
    }
  }
  return result
}

console.log(findSmallestElement([100,200,3,5,2,1]))

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

//6번 누나코딩해석

let unit = [50000, 10000, 5000, 1000, 500, 100]
function giveMeChange(money) {
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i])
    console.log(`${unit[i]}X${num}`)
    money = money - (unit[i] * num)
  }
}
giveMeChange(12300)