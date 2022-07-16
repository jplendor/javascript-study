// 4) Promise.allSettled
// all과의 공통점: 프로미스를 요소로 갖는 이터러블을 인수로 전달받는다.
// all과의 차이점
// all - 모든 프로미스가 fulfilled 상태가 되면, 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다.
// allSettled - 이름처럼 모든 프로미스가 settled(fulfilled 또는 rejected)

Promise.allSettled([
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, 1000)
  ),
  new Promise((_, reject) =>
    setTimeout(() => {
      reject(new Error("Error!"));
    }, 2000)
  ),
]).then(console.log);
