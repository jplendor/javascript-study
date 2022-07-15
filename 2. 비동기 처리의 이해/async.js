let response2;

const get = (url) => {
  const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
  xhr.open("GET", url); // HTTP 요청을 초기화
  xhr.send(); // HTTP 요청을 서버로 전송

  // The load event is fired when an XMLHttpRequest transaction completes successfully.
  // xhr.addEventListener('load', handleEvent); 또는 아래와 같이 핸들러 프로퍼티에 이벤트 핸들러를 바인딩할 수 있다.
  // 이벤트 핸들러를 바인딩하고 get 함수는 종료되며, get 함수가 종료된 후에 이벤트 핸들러가 실행된다.
  // 콜 스택: get 함수 푸시 => get 함수 팝 => console.log 푸시 => console.log 팝
  // 콜 스택이 빈 후에야 태스크 큐에서 대기 하던 이벤트 핸들러가 이벤트 루프에 의해 콜 스택으로 푸시되어 실행된다.
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

// 비동기함수의 처리 결과는 외부에 반환할 수도(response1), 상위 스코프의 변수(response2)에 할당할 수도 없다.
// 비동기함수의 처리 결과에 대한 후속 처리는 비동기 함수 내부에서 수행해야 한다.
// 이를 위해 콜백 함수를 전달하는 방식을 사용할 수 있다.

const response1 = get("https://jsonplaceholder.typicode.com/posts/1");
console.log(response1); // 명시적인 반환문이 없으므로 undefined를 반환

response2 = get("https://jsonplaceholder.typicode.com/posts/1");
console.log(response2);
