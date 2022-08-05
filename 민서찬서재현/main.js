// 자바스크립트 기초 문법 

// 변수 만들기
var a = 10   // 변수 (같은 변수 이름으로 중복 가능)
let b = 20   // 변수 (같은 변수 이름 중복 불가)
const c = 30 // 상수 : 바꿀수 없음

// 출력 
console.log(`a = ${a},b = ${b},c = ${c}`)

// 반복
for(var i = 0 ; i < 10 ; i+=2){  // 0 부터 10 전 까지 i를 1씩 더해라
    console.log(i)
}

var i = 0
while (i < 10){
    console.log(i)
    i += 1
}
// 조건
var a = 100  // == , < , > , <= ,>=, !=,  &&: and  , || : or 
if(a > 100){
    console.log("100 보다 크다")
}
else if(a < 100){
    console.log("100 보다 작다")
}
else{
    console.log("100 이랑 같다")
}

// 리스트

var a = [1,2,3,4]
for(var i = 0 ; i < a.length ; i++){ // a.length : 리스트길이
    console.log(a[i])
}
var list = [8,6,4]  // 내가 원하는 빈 공간의 리스트 만들기
list.push(10)        // 리스트 추가
list.splice(2,0,"ce")      //  리스트 추가 
console.log(list)
list.pop()          // 맨 끝에
list.shift()        // 맨 앞
console.log(list)

// 함수 
function func(n,m){
    return n + m;
}
var a = func(10,20)
console.log(a)
// 객체 형식을 만들 때 

