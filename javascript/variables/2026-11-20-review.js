// Day 5. JS 변수와 자료형 / 배열 메서드 종합 복습

// 1. 오늘 복습할 내용
// 구분	학습 내용
// 변수	let, const, var
// 자료형	string, number, boolean, undefined
// 배열	배열 생성, 인덱스로 접근
// 추가	push(), unshift()
// 삭제	pop(), shift()
// 검색	indexOf(), includes()
// 추출	slice()
// 수정	splice()

// 2. 오늘의 실습
// 실습 1
// 변수와 자료형
// 다음 코드를 작성하고 결과를 확인하세요.
const product = "Laptop";
let price = 1500000;
let isAvailable = true;

// 각 변수의 자료형을 출력하세요.
console.log(typeof product);
console.log(typeof price);
console.log(typeof isAvailable);

// 실습 2
// 배열 추가와 삭제
const animals = ["dog", "cat", "rabbit"];

// 1. "hamster"를 마지막에 추가하세요.
animals.push("hamster");

// 2. "tiger"를 맨 앞에 추가하세요.
animals.unshift("tiger");

// 3. 마지막 요소를 삭제하세요.
animals.pop();

// 4. 첫 번째 요소를 삭제하세요.
animals.shift();

// 5. 최종 배열을 출력하세요.
console.log(animals);

// 실습 3
// 배열 검색과 추출
const numbers = [10, 20, 30, 40, 50];

// 1. 30의 인덱스를 출력하세요.
console.log(numbers.indexOf(30));

// 2. 60이 배열에 있는지 확인하세요.
console.log(numbers.includes(60));

// 3. 20과 30을 추출하세요.
const slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers);

// 4. 최종 배열을 출력하세요.
console.log(numbers);

// 실습 4
// 배열 수정
const colors = ["red", "blue", "green", "yellow"];

// 1. "blue"를 삭제하세요.
colors.splice(1, 1);

// 2. 삭제한 자리에 "black"을 추가하세요.
colors.splice(1, 0, "black");

// 3. 최종 배열을 출력하세요.
console.log(colors);

// 오늘의 최종 종합 미션
const products = ["keyboard", "mouse", "monitor"];

// 1. "speaker"를 추가하세요.
products.push("speaker");

// 2. "laptop"을 맨 앞에 추가하세요.
products.unshift("laptop");

// 3. "mouse"가 있는지 확인하세요.
console.log(products.includes("mouse"));

// 4. "monitor"의 인덱스를 확인하세요.
console.log(products.indexOf("monitor"));

// 5. 배열의 마지막 상품을 삭제하세요.
products.pop();

// 6. 첫 번째 상품부터 두 개를 추출하세요.
const slicedProducts = products.slice(0, 2);
console.log(slicedProducts);

// 7. 최종 배열을 출력하세요.
console.log(products);
