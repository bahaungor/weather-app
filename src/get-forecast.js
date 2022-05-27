import { ftoC } from "./FtoC";

const APIRUL = 'https://api.openweathermap.org/data/2.5/forecast?q='
const APIKey = '&appid=99c105e9264edb75f7049ac829095c0d'

async function getForecast(location = 'Arifiye') {
    try {
        const response = await fetch(APIRUL+location+APIKey, {mode: "cors"});
        const forecast = await response.json();
        console.log(forecast.list)
    } catch (error) {
        console.log(error)
    }
}

export { getForecast }