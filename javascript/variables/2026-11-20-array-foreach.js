// Day 5. JS 배열 메서드 - 배열 반복 forEach()

// 1. forEach()란?
// 배열에 들어 있는 요소를 하나씩 꺼내서 반복적으로 작업할 때 사용하는 메서드입니다.

// 예를 들어 다음과 같은 배열이 있습니다.
const fruits = ["apple", "banana", "cherry"];

// 배열에 있는 과일을 하나씩 출력하고 싶다면 어떻게 할까요?
// forEach()를 사용하면 됩니다.
fruits.forEach(function (fruit) {
	console.log(fruit);
});
// 실행 결과
// apple;
// banana;
// cherry;

// 배열에 들어 있는 요소를 하나씩 꺼내서 실행하는 것입니다.

// 2. forEach()의 구조
// 배열.forEach(function(요소){
// 반복해서 실행할 코드
// });

// 구성	| 의미
// forEach() | 배열을 반복하는 메서드
// function	| 반복할 때 실행할 함수
// 요소	| 현재 순서의 배열 데이터
// { }	| 반복해서 실행할 코드

// 3. 화살표 함수로 작성하기
// JavaScript에서는 함수를 화살표 함수로 간단하게 작성할 수도 있습니다.
fruits.forEach((fruit) => {
	console.log(fruit);
});

// 4. 인덱스도 확인할 수 있습니다.
// forEach()는 배열의 요소뿐 아니라 인덱스도 가져올 수 있습니다.
fruits.forEach((fruit, index) => {
	console.log(index, fruit);
});

// 실행 결과
// 0 apple
// 1 banana
// 2 cherry

// 첫 번째 매개변수는 요소, 두 번째 매개변수는 인덱스입니다.

// 5. 직접 실습하기
// 실습 1 배열 요소 출력하기
const animals = ["dog", "cat", "hamster"];

// forEach()를 사용해서
// 동물 이름을 하나씩 출력하세요.
animals.forEach((animal) => {
	console.log(animal);
});

// 실습 2 배열 요소와 인덱스 출력하기
const names = ["Kim", "Jenny", "Tom"];

// forEach()를 사용해서
// 인덱스와 이름을 함께 출력하세요.
names.forEach((name, index) => {
	console.log(index, name);
});

// 실습 3 숫자 계산하기
const numbers = [10, 20, 30, 40];

// forEach()를 사용해서
// 각 숫자에 2를 곱한 결과를 출력하세요.
numbers.forEach((number) => {
	console.log(number * 2);
});

// 실습 4 응용 문제
// 상품 목록을 출력하는 간단한 코드를 작성해 보겠습니다.
const products = ["keyboard", "mouse", "monitor", "speaker"];

// 1. forEach()를 사용하세요.
// 2. 상품 이름 앞에 "상품명: "을 붙여 출력하세요.
products.forEach((product) => {
	console.log("상품명: " + product);
});

// 오늘 꼭 기억할 것
// 구분 | 설명
// forEach() |	배열의 요소를 하나씩 반복
// 첫 번째 매개변수	| 현재 요소
// 두 번째 매개변수	| 현재 인덱스
// 반환값	| undefined
// 원본 배열	| 직접 수정하지 않는 한 유지
