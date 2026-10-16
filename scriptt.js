
async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter city name!";
        return;
    }

    result.innerHTML = "Loading...";

    try {
        const response = await fetch("https://wttr.in/" + encodeURIComponent(city) + "?format=j1");
        if (!response.ok) throw new Error("API error");

        const data = await response.json();
        const w = data.current_condition[0];

        result.innerHTML = "<h2>" + city + "</h2>" +
            "<p>Temperature: " + w.temp_C + " °C</p>" +
            "<p>Weather: " + w.weatherDesc[0].value + "</p>" +
            "<p>Humidity: " + w.humidity + "%</p>";
    } catch (error) {
        result.innerHTML = "Weather not available. Check internet!";
    }
}
