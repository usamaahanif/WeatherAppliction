document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();
    const list = document.getElementById('list');
    try {
        if (list.value === 'select') {
            document.querySelector('#innerContent').innerHTML = `Please select a City.`
            $('#newWindow').modal('show');

        } else {
            fetch(`https://api.openweathermap.org/data/2.5/weather?id=${list.value}&appid=9f162c4a7576a32569f4374bd5fdff7b`)
                .then(response => response.json())
                .then(data => displayWeather(data))
                .catch(error => {
                    document.querySelector('#innerContent').innerHTML = `Error in loading the weather, please check your network.`;
                    $('#newWindow').modal('show');
                })
        }
    } catch (error) {
        document.querySelector('#innerContent').innerHTML = `Error in loading the weather, please check your network.`;
        $('#newWindow').modal('show');
    }

});

const displayWeather = weatherObject => {

    let table = document.getElementById('tableBody');
    table.innerHTML =
        `   <tr>
                <thead>
                    <th>City Name</th>
                    <th>Temperature</th>
                    <th>Maximum Temperature</th>
                    <th>Humidity</th>
                    <th>Weather<i class="fa fa-cloud"></i></th>
                </thead>
            </tr>
            <tr>
                <tbody>
                    <td>${weatherObject.name} </td> 
                    <td>${(Math.floor(weatherObject.main.temp)) - 273}</td>
                    <td>${(Math.ceil(weatherObject.main.temp_max)) - 273}</td> 
                    <td>${weatherObject.main.humidity}% </td>
                    <td>${weatherObject.weather['0'].description}</td>
                <tbody> 
            </tr>`
}