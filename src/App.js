import React,{useState} from 'react';
import axios from 'axios';
import './index.css'
function App() {
  const [data,setData]=useState({});
  const [location,setLocation]=useState('');
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f5dd42f02bfc872099c76512500f7964`;

  const searchLocation=(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  }

  return (

    <div className="box">
      <div className="app">

        <div className="search">
          <input type="text"
            value={location}
            onChange={event=>setLocation(event.target.value)}
            placeholder='Enter Location'
            onKeyPress={searchLocation}
          />
        </div>
        <div className="container">

          {/* top */}
          <div className="top">
            <div className="location">
              <p>{data.name}, {data.sys ? data.sys.country: null}</p>
              {data.weather ?  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> : null}
            </div>

            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          




          {/* bottom */}
          {data.name!==undefined &&
                <div className="bottom">
                <div className="feels">
                  {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
                  <p >Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.wind ? <p className='bold'>{data.wind.speed} MPS</p> : null}
                  <p>Wind Speed</p>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;











