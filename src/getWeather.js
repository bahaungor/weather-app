const apiKey = '296f7866e4874f4a967204528230209';
const apiUrlCurrent = 'https://api.weatherapi.com/v1/current.json';
const apiUrlForecast = 'https://api.weatherapi.com/v1/forecast.json';

function getWeatherData(city) {
    return new Promise(async (resolve, reject) => {
        fetch(`${apiUrlForecast}?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}

// async function getWeatherData(city) {
//     try {
//         const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`)
//         }

//         const data = await response.json();

//         return data

//     } catch (error) {
//         throw (error)
//     }
// }

export { getWeatherData };
