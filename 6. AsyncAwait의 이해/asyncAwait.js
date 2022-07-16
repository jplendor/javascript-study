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

const url = "https://jsonplaceholder.typicode.com";

(async () => {
  const { userId } = await promiseGet(`${url}/posts/1`);
  const userInfo = await promiseGet(`${url}/users/${userId}`);

  console.log(userInfo);
})();
