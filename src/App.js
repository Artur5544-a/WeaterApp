import axios from 'axios'
import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import { Weather } from './components/Weather'
import _ from 'lodash';

const KEY = `e8fd827aa839ddaebcd1bb41084467a9`

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      temp: '',
      country: '',
      icon: '',
      description: '',
      wind: '',
      humidity: '',
      pressure: '',
      sunrise: '',
      sunset: '',
      countrys: []
    }
  }
  getCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      if (!res.ok) throw new Error("Could not found!");
      const data = await res.json();
      console.log(data);
      this.setState({
        countrys: data
      });
    } catch (error) {

    }
  };
  getWeather = async (ev, value) => {
    ev.preventDefault()
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
      params: {
        q: value,
        appid: KEY,
        units: "metric"
      }
    })
    this.setState({
      name: data.name,
      temp: _.floor(data.main.temp),
      country: data.sys.country,
      wind: _.floor(data.wind.speed),
      icon: data.weather[0].icon,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      sunset: data.sys.sunset,
      sunrise: data.sys.sunrise,
      visibility: data.visibility
    })
    console.log(data);
    this.getCountry();
  }

  // const borders = countrys.map((country) => country.borders);



  render() {
    const { countrys, name, sunset, sunrise, temp, country, icon, wind, description, humidity, pressure, visibility
    } = this.state
    return (
      <div className={"app"} >

        <div className='app_block'>
          <Form onSubmit={this.getWeather} />
          <Weather
            countrys={countrys}
            name={name}
            temp={temp}
            country={country}
            icon={icon}
            wind={wind}
            description={description}
            sunrise={sunrise}
            sunset={sunset}
            humidity={humidity}
            pressure={pressure}
            visibility={visibility}
          />
        </div>
      </div>
    )
  }
}
