// Day 1. JS 변수와 자료형

// 1. 변수 선언
let userName = "John";
const age = 30;
var job = "Developer";

// 2. 자료형 확인
console.log(typeof userName); // string
console.log(typeof age); // number
console.log(typeof job); // string

// 3. 변수 값 변경
userName = "Jane";
console.log(userName); // Jane

// 4. 다양한 자료형
const isDeveloper = true; // boolean
const score = 95; // number
const hobbies = ["reading", "gaming", "coding"]; // array
const person = { name: "Alice", age: 25 }; // object

console.log(typeof isDeveloper); // boolean
console.log(typeof score); // number
console.log(typeof hobbies); // object (배열인지 정확히 알 수 없음)
console.log(Array.isArray(hobbies)); // true (진짜 배열인지 정확하게 확인 가능)
console.log(typeof person); // object

// 설명
// let : 값을 재할당할 수 있으며, 블록 스코프를 가집니다.
// const : 재할당할 수 없으며, 블록 스코프를 가집니다.
// var : 값을 재할당할 수 있으며, 함수 스코프를 가집니다. (권장되지 않음)
// typeof : 변수나 값의 자료형을 문자열로 반환하는 연산자입니다.

// console.log(typeof hobbies); // object
// 자바스크립트의 오래된 역사(설계 당시의 실수) 때문에 생기는 대표적인 특징 중 하나
// 자바스크립트에서 배열(Array)은 객체(Object)의 한 종류이기 때문에 typeof 연산자를 사용하면 "object"로 반환됩니다.
// Array.isArray() 메서드를 사용하면 배열인지 아닌지를 정확하게 확인할 수 있습니다.
