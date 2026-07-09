async function getWeather() {

    let city = document.getElementById("city").value;
    let apiKey = "a28b9f8caac1eda516e186357b0fdd4b";

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" +
              city +
              "&appid=" +
              apiKey +
              "&units=metric";

    try {
        document.getElementById("weather").innerHTML =
        "<p>Loading weather...</p>";
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);

        if (data.cod != 200) {
    document.getElementById("weather").innerHTML =
        "<h3>❌ City Not Found</h3><p>Please enter a valid city name.</p>";
    return;
}

       document.getElementById("weather").innerHTML =
`
        <h2>${data.name}</h2>
        <p>🌡 <strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p>💧 <strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p>☁ <strong>Condition:</strong> ${data.weather[0].description}</p>
`;
    } catch (error) {

        console.log(error);

        document.getElementById("weather").innerHTML =
            "Something went wrong.";

    }

}