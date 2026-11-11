// Day 2. JS 배열 메서드

// 1. 배열(Array)이란 ?
// 배열은 여러 개의 데이터를 하나의 변수에 저장하는 자료구조입니다.
const fruits = ["apple", "banana", "cherry"];
console.log(fruits); // ["apple", "banana", "cherry"]
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry

// 2. 배열의 주요 메서드
// 2-1. push() : 배열의 끝에 새로운 요소를 추가합니다.
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "cherry", "mango"]

// 2-2. pop() : 배열의 마지막 요소를 제거하고 반환합니다.
fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]

// 2-3. shift() : 배열의 첫 번째 요소를 제거하고 반환합니다.
fruits.shift();
console.log(fruits); // ["banana", "cherry"]

// 2-4. unshift() : 배열의 첫 번째에 새로운 요소를 추가합니다.
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "banana", "cherry"]

// 실습하기
// 1. 배열 선언
const colors = ["red", "green", "blue"];
console.log("초기 배열 : ", colors); // 초기 배열 :  [ 'red', 'green', 'blue' ]

// 2. push() 마지막에 추가
colors.push("gold");
console.log("push() 후 : ", colors); // push() 후 :  [ 'red', 'green', 'blue', 'gold' ]

// 3. pop() 마지막 요소 삭제
colors.pop();
console.log("pop() 후 : ", colors); // pop() 후 :  [ 'red', 'green', 'blue' ]

// 4. shift() 첫 번째 요소 삭제
colors.shift();
console.log("shift() 후 : ", colors); // shift() 후 :  [ 'green', 'blue' ]

// 5. unshift() 처음에 추가
colors.unshift("pink");
console.log("unshift() 후 : ", colors); // unshift() 후 :  [ 'pink', 'green', 'blue' ]

// practice
const watingList = ["김민수", "이서연", "박지훈"];
watingList.push("최유진");
watingList.shift();
watingList.unshift("정하늘");
watingList.pop();
console.log(watingList);

// practice
const numbers = [10, 20, 30];
numbers.unshift(5);
numbers.push(40);
numbers.shift();
numbers.pop();
console.log(numbers);

// practice
const animals = ["cat", "dog", "rabbit"];
animals.push("lion");
animals.pop();
animals.unshift("tiger");
animals.shift();
console.log(animals);
