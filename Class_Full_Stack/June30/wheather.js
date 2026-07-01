async function getWeather() {

    var city = document.getElementById("city").value;

    var apiKey = "f9c14b5d6ccea644f7813c2a2fd72886";

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&appid=" 
            + apiKey 
            + "&units=metric";

    try {

        var response = await fetch(url);
        var data = await response.json();

        if (data.cod == "404") {
            document.getElementById("weatherResult").innerHTML =
                "<h3>City Not Found!</h3>";
            return;
        }

        var result = "<h2>" + data.name + ", " + data.sys.country + "</h2>";
        result += "<p><strong>Temperature:</strong> " + data.main.temp + " °C</p>";
        result += "<p><strong>Weather:</strong> " + data.weather[0].main + "</p>";
        result += "<p><strong>Description:</strong> " + data.weather[0].description + "</p>";
        result += "<p><strong>Humidity:</strong> " + data.main.humidity + "%</p>";
        result += "<p><strong>Wind Speed:</strong> " + data.wind.speed + " m/s</p>";

        document.getElementById("weatherResult").innerHTML = result;

    } catch (error) {

        document.getElementById("weatherResult").innerHTML =
            "<h3>Something went wrong!</h3>";

    }

}