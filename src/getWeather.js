const apiKey = '296f7866e4874f4a967204528230209';
const apiUrl = 'https://api.weatherapi.com/v1/current.json';

function getWeatherData(city) {
    return new Promise(async (resolve, reject) => {
        fetch(`${apiUrl}?key=${apiKey}&q=${city}`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}

// async function getWeatherData(city) {
//     try {
//         const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}`);

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
