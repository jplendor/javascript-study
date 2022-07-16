// 1) Promise.resolve, Promise.reject
// 이미 존재하는 값을 래핑하여 프로미스를 생성하기 위해 사용한다.

const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log);

// 위 두줄 코드와 동일하게 동작한다.
// const resolvedPromise = new Promise((resolve) => resolve([1, 2, 3]));
// resolvedPromise.then(console.log);

const rejectedPromise = Promise.reject(new Error("error occured"));
rejectedPromise.catch(console.log);

// 위 두줄 코드와 동일하게 동작한다.
// const rejectedPromise = new Promise((_, reject) =>
//   reject(new Error("error occured"))
// );
// resolvedPromise.catch(console.log);
