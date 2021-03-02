export function showRes() {
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      console.log(JSON.parse(http.response));
    }
  };

  http.open("GET", "http://swapi.dev/api/people/64/", true);
  http.send();
}
