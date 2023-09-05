import './style.css'
import { getWeatherData } from './getWeather'
import { setTheme } from './themeUtils'; // Thank you ES6 Modules!

document.querySelector('.tt').addEventListener('click', setTheme)


getWeatherData('serdivan').then((data) => {
    console.log(data)

})
