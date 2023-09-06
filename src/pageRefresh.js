import { getWeatherData } from './getWeather'

const input = document.querySelector('form > div > input')
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updatePage(e) {
    e.preventDefault()
    getWeatherData(input.value).then((data) => {
        console.log(data)
        document.querySelector('.cards').innerHTML = ''
        for (let i = 0; i < 5; i++) {
            const card = document.createElement('div')
            card.classList.add('card')

            const title = document.createElement('div')
            title.classList.add('title')
            title.textContent = days[(new Date(data.forecast.forecastday[i].date)).getDay()]
            card.appendChild(title)

            const temp = document.createElement('div')
            temp.classList.add('temp')
            temp.textContent = `${data.forecast.forecastday[i].day.avgtemp_c} °C`
            card.appendChild(temp)

            const image = document.createElement('img')
            image.setAttribute('src', `https:${data.forecast.forecastday[i].day.condition.icon}`)
            image.setAttribute('alt', `${data.forecast.forecastday[i].day.condition.text}`)
            card.appendChild(image)

            const feeling = document.createElement('div')
            feeling.classList.add('feeling')
            feeling.textContent = `${data.forecast.forecastday[i].day.condition.text}`
            card.appendChild(feeling)

            const humidity = document.createElement('div')
            humidity.classList.add('humidity')
            humidity.textContent = `${data.forecast.forecastday[i].day.avghumidity} %`
            card.appendChild(humidity)

            const wind = document.createElement('div')
            wind.classList.add('humidity')
            wind.textContent = `${data.forecast.forecastday[i].day.maxwind_kph} km/h`
            card.appendChild(wind)
            document.querySelector('.cards').appendChild(card)
        }

    })
}

export { updatePage }