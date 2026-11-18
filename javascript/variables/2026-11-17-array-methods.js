// Day 4. JS 배열 메서드 추가 학습

// indexOf(), includes(), slice(), splice() 를 공부하겠습니다.
// 이 메서드들은 배열에서 특정 데이터를 찾거나, 일부 데이터를 가져오거나, 배열을 수정할 때 사용합니다.

// 1. indexOf() — 배열에서 요소의 위치 찾기
// 배열에서 특정 값이 몇 번째 인덱스에 있는지 반환합니다.
const fruits = ["apple", "banana", "cherry", "pear"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("pear")); // 3
console.log(fruits.indexOf("orange")); // -1 (존재하지 않는 값)

// 핵심 개념:
// - 배열의 인덱스는 0부터 시작합니다.
// - 찾는 값이 있으면 해당 인덱스를 반환합니다.
// - 찾는 값이 없으면 -1을 반환합니다.

// 2. includes() — 배열에 특정 요소가 있는지 확인
// 특정 값이 배열에 존재하는지 확인하고 true 또는 false를 반환합니다.
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false

// 핵심 개념:
// - 존재하면 true
// - 존재하지 않으면 false

// 3. slice() — 배열의 일부 추출하기
// 배열에서 원하는 범위의 요소를 추출하여 새로운 배열을 반환합니다.
const slicedFruits = fruits.slice(1, 3); // 인덱스 1부터 3 전까지 추출
console.log(slicedFruits); // ["banana", "cherry"]
console.log(fruits); // 원본 배열은 변경되지 않습니다. ["apple", "banana", "cherry", "pear"]

// 핵심 개념:
// - slice(start, end) : start 인덱스부터 end 인덱스 전까지 추출
// - 원본 배열은 변경되지 않습니다.

// 4. splice() — 배열의 요소 추가 및 삭제
// 배열의 특정 위치에서 요소를 삭제하거나 새로운 요소를 추가할 수 있습니다.

// ① 요소 삭제
fruits.splice(1, 2); // 인덱스 1부터 2개의 요소를 삭제
console.log(fruits); // ["apple", "pear"]

// splice(1, 2) 의미:
// - 1: 시작 인덱스
// - 2: 삭제할 요소 개수

// ② 요소 추가
const colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "orange");
console.log(colors); // ["red", "yellow", "orange", "green", "blue"]

// splice(1, 0, "yellow", "orange") 의미:
// - 1: 삽입할 위치
// - 0: 삭제할 요소 개수 (0이면 삭제하지 않음)
// - "yellow", "orange": 추가할 요소들

// ③ 요소 변경
const cart = ["shoes", "hat", "socks"];
cart.splice(1, 1, "t-shirt");
console.log(cart); // ["shoes", "t-shirt", "socks"]

// splice(1, 1, "t-shirt") 의미:
// - 1: 변경할 위치
// - 1: 삭제할 요소 개수 (1이면 해당 요소를 삭제)
// - "t-shirt": 추가할 요소

// ----------------------- 실습 -------------------------
// 실습 1. indexOf()와 includes()
const animals = ["cat", "dog", "rabbit", "tiger"];

// 문제 1. "rabbit"의 인덱스를 출력하세요.
console.log(animals.indexOf("rabbit")); //2

// 문제 2. "dog"가 배열에 존재하는지 확인하세요.
console.log(animals.includes("dog")); // true

// 문제 3. "lion"이 배열에 존재하는지 확인하세요.
console.log(animals.includes("lion")); // false

// 문제 4. "elephant"의 인덱스를 출력하세요.
console.log(animals.indexOf("elephant")); // -1

// 실습2. slice()
// 배열의 일부를 추출해 보겠습니다.
const numbers = [10, 20, 30, 40, 50];

// 문제 1. 20, 30을 추출하세요.
const result1 = numbers.slice(1, 3);
console.log(result1); // [20, 30]

// 문제 2. 40, 50을 추출하세요.
const result2 = numbers.slice(3, 5);
console.log(result2); // [40, 50]

// 문제 3. 배열의 처음 3개 요소를 추출하세요.
const result3 = numbers.slice(0, 3);
console.log(result3); // [10, 20, 30]

// 문제 4. 원본 배열이 변경되었는지 확인하세요.
console.log(numbers); // [10, 20, 30, 40, 50] (원본 배열은 변경되지 않음)

// 실습3. splice() 배열 요소 추가 및 삭제
const movies = ["Inception", "Interstellar", "Avatar", "Titanic"];

// 문제 1. "Interstellar"를 삭제하세요.
// movies.splice(1, 1);
// console.log(movies); // ["Inception", "Avatar", "Titanic"]

// 문제 3. "Inception"과 "Interstellar" 사이에 "The Dark Knight"를 추가하세요.
// movies.splice(1, 0, "The Dark Knight");
// console.log(movies); // ["Inception", "The Dark Knight", "Interstellar", "Avatar", "Titanic"]

// 문제 4. "Avatar"를 "Iron Man"으로 변경하세요.
movies.splice(2, 1, "Iron Man");
console.log(movies); // [ 'Inception', 'Interstellar', 'Iron Man', 'Titanic' ]

// 실습 4. 배열 메서드 종합 문제
const cafeMenu = ["Americano", "Latte", "Vanilla Latte", "Green Tea"];

// 문제 1. 신메뉴 추가
// "Caramel Macchiato"를 메뉴 마지막에 추가하세요.
cafeMenu.push("Caramel Macchiato");
console.log(cafeMenu); // ["Americano", "Latte", "Vanilla Latte", "Green Tea", "Caramel Macchiato"]

// 문제 2. 메뉴 검색
// "Latte"가 메뉴에 존재하는지 확인하세요.
// console.log(cafeMenu.indexOf("Vanilla Latte")); // 2
console.log(cafeMenu.includes("Latte")); // true

// 문제 3. 메뉴 위치 확인
// "Green Tea"의 인덱스를 출력하세요.
console.log(cafeMenu.indexOf("Green Tea")); // 3

// 문제 4. 메뉴 삭제
// "Vanilla Latte"를 메뉴에서 삭제하세요.
cafeMenu.splice(2, 1);
console.log(cafeMenu); // ["Americano", "Latte", "Green Tea", "Caramel Macchiato"]

// 문제 5. 메뉴 변경
// "Green Tea"를 "Peach Tea"로 변경하세요.
cafeMenu.splice(2, 1, "Peach Tea");
console.log(cafeMenu); // ["Americano", "Latte", "Peach Tea", "Caramel Macchiato"]

// 문제 6. 메뉴 추가
// "Americano" 바로 뒤에 "Cold Brew"를 추가하세요.
cafeMenu.splice(1, 0, "Cold Brew");
console.log(cafeMenu); // ["Americano", "Cold Brew", "Latte", "Peach Tea", "Caramel Macchiato"]

// 문제 7. 메뉴 일부 추출
// 현재 메뉴에서 처음 3개의 메뉴만 새로운 배열로 추출하세요.
const slicedCafeMenu = cafeMenu.slice(0, 3);
console.log(slicedCafeMenu);
