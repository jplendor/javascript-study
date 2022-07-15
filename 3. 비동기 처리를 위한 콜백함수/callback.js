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

get("https://jsonplaceholder.typicode.com/posts/1", console.log, console.error);
