document.querySelector("button").addEventListener("click", getWeather);

function getWeather() {
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  let place = city + "," + country;
  let apiKey = "f1bc4d248bae066ff924465ffe321195";
  let apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    place +
    "&appid=" +
    apiKey +
    "&units=imperial";
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("p").innerHTML =
        "The weather in " +
        place +
        " is " +
        response.main.temp +
        " degrees Fahrenheit.";
    })
    .catch(err => {
      console.log(`error ${err}`);
      // alert("sorry, there are no results for your search")
    });
}
