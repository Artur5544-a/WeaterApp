import React, { useEffect, useState } from 'react'
import { FiMapPin } from 'react-icons/fi';
import { FaWind } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { MdOutlineVisibility } from 'react-icons/md';
import axios from 'axios';



export const Weather = (props) => {
    const borders = props.countrys.filter((country) => country.name.common === props.name);
    console.log(borders);
    return (
        <div className='weather-item'>
            {borders.map((country, index) => (
                <div key={index}>
                    <div className='item_txt'>
                        {country.name.common ? <h1><FiMapPin />{country.name.common} {country.cca2}</h1> : null}
                    </div>
                    <div className='item_flags_img'>
                        <img src={country.flags.png} alt="" />
                        <p>Population: {country.population} </p>
                        <p>Phone: {country.idd.root}{country.idd.suffixes[0]} </p>
                        <p>Region: {country.region} </p>
                    </div>
                </div>
            ))}
            <div className='item-img'>
                {props.icon ? <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} /> : null}
                {props.temp ? <h2 className='item_img_h2'> {props.temp} °</h2> : null}
            </div>
            <div className='txt'>
                {props.humidity ? <h3><WiHumidity /> Humidity {props.humidity}%</h3> : null}
                {props.pressure ? <h3>Pressure {props.pressure}mm </h3> : null}
                {props.wind ? <h3><FaWind /> Wind {props.wind} kph </h3> : null}
                {props.visibility ? <h3><MdOutlineVisibility /> Visibility {props.visibility}km</h3> : null}
                {props.sunrise ? <h3>{new Date(props.sunrise * 1000).toLocaleTimeString('en-IN')}</h3> : null}
                {props.sunset ? <h3> {new Date(props.sunset * 1000).toLocaleTimeString('en-IN')}</h3> : null}
            </div>
        </div>
    )
}

