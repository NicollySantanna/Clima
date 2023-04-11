// Variáveis e seleção de elementos
const apiKey = "dee0a27dca1793d266d59786e4aced61";
const apiCountryUrl = "https://flagsapi.com/${}/flat/64.png";

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

// Funções
const getWeatherData = async(city) =>{
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherUrl)
    const data = await res.json()

    console.log(data)
}


const showWeatherDta = (city) => {
getWeatherData(city)
}



// Eventos
searchBtn.addEventListener("click", (e) =>{
e.preventDefault()

const city = cityInput.value

console.log(city)
})