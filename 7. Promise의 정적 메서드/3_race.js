// 3) Promise.race
// all과의 공통점: 프로미스를 요소로 갖는 이터러블을 인수로 전달받는다.
// all과의 차이점
// all - 모든 프로미스가 fulfilled 상태가 되면, 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다.
// race - 이름처럼 경주하듯이, 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 resolve 하는 프로미스를 반환한다.

const requestData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)); // 3초 소요
const requestData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)); // 2초 소요
const requestData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)); // 1초 소요

Promise.race([requestData1(), requestData2(), requestData3()]) // 1초 + α 소요
  .then(console.log) // 3
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

Promise.race([requestError1(), requestError2(), requestError3()]); // 1초 + α 소요
