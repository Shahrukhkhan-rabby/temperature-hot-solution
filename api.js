const API_KEY = 'bf65cb0b705310d06ff3efab11573f2d';
const searchTemperature = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayTemperature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    const city = temperature.name;
    const tempKelvin = temperature.main.temp;
    const tempCelsius = (tempKelvin - 273.15).toFixed(2);
    const condition = temperature.weather[0].main;
    const iconCode = temperature.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    setInnerText('city', city);
    setInnerText("temperature", `${tempCelsius}°C`);
    setInnerText("condition", condition);
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', iconUrl)
};