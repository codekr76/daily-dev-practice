// Day 3. JS 기초 복습

// 미션 1. 변수 선언하기
// let name = "Alice";
// const age = 25;
var job = "Developer";
// const isDeveloper = true;

// 미션 2. 자료형 확인하기
// 다음 변수를 선언하고 각각의 자료형을 출력하세요.
const userName = "Mike";
// const age = 30;
// const isDeveloper = true;
// const hobbies = ["coding", "reading", "gaming"];
const person = { name: "Mike", age: 30 };

// 출력할 항목:
// - userName의 자료형
// - age의 자료형
// - isDeveloper의 자료형
// - hobbies의 자료형
// - hobbies가 배열인지 확인
// - person의 자료형

console.log(typeof userName);
// console.log(typeof age);
// console.log(typeof isDeveloper);
// console.log(typeof hobbies);
// console.log(Array.isArray(hobbies));
console.log(typeof person);

// 미션 3. 변수 재할당하기
// 1. let으로 userName을 선언하고 "John" 저장
// 2. "Jane"으로 변경
// 3. 변경된 값 출력
let userName2 = "John";
userName2 = "Jane";
console.log(userName2);

// 2단계. 배열 메서드 연습
// 미션 4. 배열 선언 및 조회

// 다음 배열을 선언하세요.
const fruits = ["apple", "banana", "cherry"];

// 배열 전체 출력
console.log(fruits);

// 첫 번째 요소 출력
console.log(fruits[0]);

// 두 번째 요소 출력
console.log(fruits[1]);

// 세 번째 요소 출력
console.log(fruits[2]);

// 미션 5. 배열에 추가하고 삭제하기
// 다음 배열을 만들고 순서대로 실행하세요.
const colors = ["red", "green", "blue"];

// 마지막에 "gold" 추가
colors.push("gold");
console.log(colors);

// 마지막 요소 삭제
colors.pop();
console.log(colors);

// 처음 요소 삭제
colors.shift();
console.log(colors);

// 처음에 "pink" 추가
colors.unshift("pink");
console.log(colors);

// 매 단계마다 배열 출력

// 미션 6. 배열 메서드 구분하기
// 다음 요구사항에 맞는 메서드를 직접 작성하세요.
// 요구사항	| 사용 메서드
// 마지막에 추가	| push()
// 마지막 삭제	| pop()
// 처음에 추가	| unshift()
// 처음 삭제	| shift()

// 3단계. 실전 응용 문제

// 미션 7. 도서관 대출 대기열 관리
// 초기 대기열입니다.
const watingList = ["김민수", "이서연", "박지훈"];

// 다음 순서대로 처리하세요.
// 1. 마지막에 "최유진" 추가
watingList.push("최유진");

// 2. 첫 번째 사람 대기열에서 제거
watingList.shift();

// 3. 맨 앞에 "정하늘" 추가
watingList.unshift("정하늘");

// 4. 마지막 사람 제거
watingList.pop();

// 5. 최종 대기열 출력
console.log(watingList);

// 미션 8. 숫자 배열 관리
// 초기 배열입니다.
const numbers = [10, 20, 30];

// 다음 순서대로 처리하세요.
// 1. 맨 앞에 5 추가
numbers.unshift(5);

// 2. 맨 뒤에 40 추가
numbers.push(40);

// 3. 맨 앞 요소 삭제
numbers.shift();

// 4. 맨 뒤 요소 삭제
numbers.pop();

// 5. 최종 배열 출력
console.log(numbers);

// 미션 9. 동물 배열 관리
// 초기 배열입니다.
const animals = ["cat", "dog", "rabbit"];

// 다음 순서대로 처리하세요.
// 1. "lion" 추가
animals.push("lion");

// 2. 마지막 요소 삭제
animals.pop();

// 3. "tiger"를 맨 앞에 추가
animals.unshift("tiger");

// 4. 첫 번째 요소 삭제
animals.shift();

// 5. 최종 배열 출력
console.log(animals);

// 4단계. 최종 종합 미션
// 미션 10. 사용자 정보 및 취미 관리
// 다음 조건을 모두 만족하는 코드를 작성하세요.
// 1. 이름, 나이, 개발자 여부를 각각 변수로 선언
const name = "Aya";
const age = 75;
const isDeveloper = true;

// 2. 취미를 담은 배열 선언 (coding, gaming, reading)
const hobbies = ["coding", "gaming", "reading"];

// 3. 사용자 정보를 객체로 선언
const userInfo = {
	name: "Aya",
	age: 75,
	isDeveloper: true,
	hobbies: ["coding", "gaming", "reading"],
};

// 4. 이름과 취미 배열의 자료형 출력
console.log(typeof name);
console.log(typeof hobbies);

// 5. 취미가 배열인지 확인
console.log(Array.isArray(hobbies));

// 6. 취미 마지막에 "traveling" 추가
hobbies.push("traveling");

// 7. 취미 첫 번째 요소 삭제
hobbies.shift();

// 8. 최종 취미 배열 출력
console.log(hobbies);
