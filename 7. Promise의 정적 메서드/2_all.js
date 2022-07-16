// 2) Promise.all
// 여러 개의 비동기 처리를 모두 병렬 처리할 때 사용한다.

const requestData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)); // 3초 소요
const requestData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)); // 2초 소요
const requestData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)); // 1초 소요

// const res = [];

// requestData1()
//   .then((data) => {
//     res.push(data);
//     return requestData2();
//   })
//   .then((data) => {
//     res.push(data);
//     return requestData3();
//   })
//   .then((data) => {
//     res.push(data);
//     console.log(res);
//   })
//   .catch(console.err);
// 3 + 2 + 1 = 6초 + α 소요

// requestData1, 2, 3 비동기 함수는 서로 독립적이므로, 병렬로 처리하는 것이 더 좋겠다.
// 아래와 같이 Promise.all 메서드를 사용해서 병렬 처리할 수 있다.
// 프로미스를 요소로 갖는 이터러블을 인수로 전달받는다.
// 모든 프로미스가 fulfilled 상태가 되면, 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다.

Promise.all([requestData1(), requestData2(), requestData3()]) // 3초 + α 소요
  .then(console.log) // [1, 2, 3] => (인수로 전달한 순서대로) 처리 결과의 순서가 보장된다.
  .catch(console.err);

const requestError1 = () =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Error 1")), 3000)
  ); // 3초 소요
const requestError2 = () =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Error 2")), 2000)
  ); // 2초 소요
const requestError3 = () =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Error 3")), 1000)
  ); // 1초 소요

Promise.all([requestError1(), requestError2(), requestError3()]); // 1초 + α 소요
// 하나의 프로미스라도 rejected 상태가 되면, 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료된다.
