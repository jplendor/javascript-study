const get = (url, successCallback, failureCallback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      successCallback(JSON.parse(xhr.response));
    } else {
      failureCallback(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

const url = "https://jsonplaceholder.typicode.com";
get(
  `${url}/posts/1`,
  ({ userId }) => {
    console.log(userId);
    get(`${url}/users/${userId}`, (userInfo) => {
      console.log(userInfo);
    });
  },
  console.error
);

// 비동기 처리 결과에 대한 후속 처리로 또 비동기 함수를 실행하고자 하는데
// 콜백 함수 호출이 중첩되어 (콜백 헬) 가독성이 안 좋아진다. *** 콜백 패턴의 문제점 1 ***

try {
  setTimeout(() => {
    throw new Error("Error!");
  }, 1000);
} catch (e) {
  console.log("캐치한 에러", e);
}

// 에러를 캐치하지 못한다. *** 콜백 패턴의 문제점 2 ***
// 에러는 호출자 방향으로 전파되는데 (콜 스택 아래 방향으로 전파되는데),
// setTimeout의 콜백 함수가 실행될 때는 이미 setTimeout 함수는 콜 스택에서 제거된 상태이므로
// setTimeout 함수 안의 catch 블록에서 에러가 캐치되지 못한다.

// 이를 해결하기 위해 ES6부터 도입된 Promise!
