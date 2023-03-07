const API_KEY = `ba52e5b1274ce7f5a452d58a1edeb59c`;

const fetchWeather = (city, country) => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}
const displayWeather = data => {
    console.log(data);
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('temp-feels').innerText = data.main.feels_like;
    document.getElementById('condition').innerText = data.weather[0].main;
}

document.getElementById('search-btn').addEventListener('click', function(){
    let city = document.getElementById('search-field').value;
   
    fetchWeather(city);
})