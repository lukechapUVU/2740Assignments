const apiURL = '//api.openweathermap.org/data/2.5/forecast?id=4855679&appid=5f663fc21df39b5eaf21030066fb7bf5&units=imperial'
const mydate = new Date();
const todayNum = mydate.getDay();
const daysArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const todayString = daysArray[todayNum];
const degreeChar = '&deg';
fetch (apiURL)
.then((weatherInfo) => weatherInfo.json())
.then((weatherInfo) => {
    var mainHeader = document.createElement('h1');
    mainHeader.innerHTML = 'Weather Channel';
    document.getElementById('mainWrapper').appendChild(mainHeader);

    var townName = document.createElement('h3');
    townName.innerHTML = weatherInfo.city.name;
    document.getElementById('mainWrapper').appendChild(townName);

    var weatherWrapper = document.createElement('div');
    weatherWrapper.id = 'weatherWrapper';
    document.getElementById('mainWrapper').appendChild(weatherWrapper);

    var forecastDayNumber = todayNum;
    var dayIteration = 0;
    var i = 0;
    weatherInfo.list.forEach(e => {
        var time = e.dt_txt;
        i++;
        if(time.includes('18:00:00'/*CST*/))  {
            //Day
            forecastDayNumber++;
            if(forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }
            var dayHeaderTag = document.createElement('h4');
            dayHeaderTag.className = 'day-name';
            dayHeaderTag.innerHTML = daysArray[forecastDayNumber];
            document.getElementById('weatherWrapper').appendChild(dayHeaderTag);

            //Temperature
            var temperatureTag = document.createElement('p');
            temperatureTag.className = 'temperature';
            var temperatureLong = weatherInfo.list[i].main.temp.toString();
            var temperatureShort = temperatureLong.slice(0,temperatureLong.indexOf('.'));
            temperatureTag.innerHTML = temperatureShort + degreeChar;
            document.getElementById('weatherWrapper').appendChild(temperatureTag);

            //Icon
            const iconcode = weatherInfo.list[i].weather[0].icon;
            const icon_path = '//openweathermap.org/img/wn/' + iconcode + '.png';
            var weatherIconTag = document.createElement('img');
            weatherIconTag.className = 'weather-icon';
            weatherIconTag.src = icon_path;
            document.getElementById('weatherWrapper').appendChild(weatherIconTag);

            //Container
            var weatherCard = document.createElement('div');
            weatherCard.className = 'weather-card';
            weatherCard.appendChild(dayHeaderTag);
            weatherCard.appendChild(temperatureTag);
            weatherCard.appendChild(weatherIconTag);

            document.getElementById('weatherWrapper').appendChild(weatherCard);

            dayIteration++;
            //Gap on medium screen
            if(dayIteration == 3) {
                var mediumSpace = document.createElement('div');
                mediumSpace.className = 'medium-space';
                document.getElementById('weatherWrapper').appendChild(mediumSpace);
            }
        }
    });
    
    
});