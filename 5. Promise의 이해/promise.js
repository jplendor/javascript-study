// 1. Promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 받는다.
// 2. 그 콜백 함수는 resolve, reject 함수를 인수로 받는다.

const promise = new Promise((resolve, reject) => {
  // 비동기 처리
  if (true) {
    /* 비동기 처리 성공하면, 비동기 처리 결과를 resolve 함수에 인수로 전달하면서 호출 */
    resolve("result");
  } else {
    /* 비동기 처리 실패하면, 에러를 reject 함수에 인수로 전달하면서 호출 */
    reject("failure reason");
  }
});

// Promise는 비동기 처리 상태와 처리 결과를 관리하는 객체
const fulfilled = new Promise((resolve) => resolve(1));
const rejected = new Promise((_, reject) => reject(new Error("error occured")));

// 후속 처리 메서드: then, catch, finally
new Promise((resolve) => resolve("result")).then(
  (v) => console.log(v),
  (e) => console.error(e)
);

new Promise((_, reject) => reject(new Error("failure reason"))).then(
  (v) => console.log(v),
  (e) => console.error(e)
);

new Promise((_, reject) => reject(new Error("failure reason")))
  .catch((e) => console.error(e))
  .finally(() => {
    console.log("finally");
  });

const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

promiseGet("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("finally");
  });

// 에러 처리
// 방법 1) then 메서드의 두번째 콜백 함수로
// 방법 2) catch 메서드의 콜백 함수로

const wrongUrl = "https://jsonplaceholder.typicode.com/xxx";

// 방법 1
promiseGet(wrongUrl).then(
  (res) => console.log(res),
  (err) => console.error(err)
);

// 방법 2
promiseGet(wrongUrl).catch((err) => console.error(err));
// catch 호출하면 내부적으로 then(undefined, onRejected) 호출

// 방법 1 vs. 방법 2
promiseGet("https://jsonplaceholder.typicode.com/posts/1").then(
  (res) => console.xxx(res),
  (err) => console.error(err)
);
// 방법 1로 작성한 경우, 비동기 처리에서 발생한 에러는 잡지만, 첫번째 콜백 함수에서 발생한 에러를 잡지 못한다.

promiseGet("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.xxx(res))
  .catch((err) => console.error(err));
// 방법 2로 작성한 경우, 비동기 처리에서 발생한 에러 + 첫번째 콜백 함수에서 발생한 에러 모두 잡을 수 있다.

// then, catch, finally와 같은 후속처리 메서드는 Promise를 반환하므로 연속적으로 호출할 수 있다. (프로미스 체이닝)
// 콜백 헬은 발생하지 않지만, 콜백 패턴은 여전히 사용한다.

// 콜백 패턴을 아예 쓰지않고, 동기 처리하듯이 쓸 수 있도록 ES8부터 도입된 async/await
