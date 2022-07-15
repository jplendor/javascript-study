// repeatWithoutCallback 함수 선언
// 기능: 어떤 일을 반복 수행
// 문제점: console.log(i)에 강하게 의존하고 있어, 반복 수행할 일을 바꾸려면 함수를 새로 선언해야한다.

function repeatWithoutCallback(n) {
  for (var i = 0; i < n; i++) console.log(i);
}

repeatWithoutCallback(5);

// repeat 함수 선언
// 기능: 어떤 일을 반복 수행
// 변하지 않는 공통 로직은 미리 정의해두고, 변하는 로직(f)은 추상화하여 외부에서 전달 받는다.
// 장점: 외부에서 로직의 일부를 전달받아 수행하므로 유연하게 사용할 수 있다.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  console.log(i);
};

repeat(5, logAll);

var logOdd = function (i) {
  if (i % 2 != 0) {
    console.log(i);
  }
};

repeat(5, logOdd);

// -------------- < Summary > --------------
// 콜백 함수(Callback Function): 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
// 고차 함수(Higher-Order Function): 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수
