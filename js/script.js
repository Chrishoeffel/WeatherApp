console.log("sanity check")
async function getWeatherData(e) {
	e.preventDefault();

	const userInput = $('input[type="text"]').val();
	const apiKey = "dab4d1e69e5368e36897596fac613361";
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${apiKey}`;


	const response = await fetch(url);
	const data = await response.json();
    console.log(data);

    $("#name").html(data.name);
	$("#humidity").html(data.main.humidity);
	$("#feelsliketemp").html(data.main.feels_like);

}
$("form").on("submit", getWeatherData);