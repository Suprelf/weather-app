import React, { useEffect, useState } from 'react';
import './panel.scss';
import City from '../../interfaces/city';
import Chart from '../chart/chart';

function Panel(props: City) {

  const [smallName, setSmallName] = useState<boolean>(false)
  const [temperatureDigit, setTemperatureDigit] = useState<string>('')
  const [feelsDigit, setFeelsDigit] = useState<string>('')

  const [metrics, setMetrics] = useState<string>(props.metrics)
  const [metricsTouched, setMetricsTouched] = useState<boolean>(false)
  function switchMetrics(format: string) {
    setMetricsTouched(true)
    if (format !== metrics) {
      setMetrics(format)
    }

    let storedCities: Array<City> = JSON.parse(localStorage.getItem('cities') ?? '[]')
    storedCities.map((city) => {
      if (city.id === props.id) {
        city.metrics = format
      }
    })

    localStorage.setItem('cities', JSON.stringify(storedCities))
  }

  const [temperatureValue, setTemperatureValue] = useState<number>(props.temperature)
  const [feelsValue, setFeelsValue] = useState<number>(props.feels)

  useEffect(() => {
    if (metrics === 'Fahrenheit' && metricsTouched === false) {
      setTemperatureValue((temperatureValue * (9 / 5)) + 32)
      setFeelsValue((feelsValue * (9 / 5)) + 32)
    }
  }, [])

  useEffect(() => {

    if (temperatureValue > 0) {
      setTemperatureDigit('+')
    } else setTemperatureDigit('')

    if (feelsValue > 0) {
      setFeelsDigit('+')
    } else setFeelsDigit('')

    if (metrics === 'Celsius' && metricsTouched) {
      setTemperatureValue((temperatureValue - 32) * (5 / 9))
      setFeelsValue((feelsValue - 32) * (5 / 9))
    } else if (metrics === 'Fahrenheit' && metricsTouched) {
      setTemperatureValue((temperatureValue * (9 / 5)) + 32)
      setFeelsValue((feelsValue * (9 / 5)) + 32)
    }

  }, [metrics, temperatureDigit, feelsDigit])

  useEffect(() => {
    if (props.name.length > 30) {
      setSmallName(true)
    }
  })


  return (
    <div className='panel-container' style={{ backgroundColor: (props.temperature > 0) ? '#FFFAF1' : '#F1F2FF' }}>

      <div className='panel-header'>
        <div className='panel-header-left'>
          <div className='panel-header-left-item'
            style={{ fontSize: smallName ? '13px' : '16px' }}>
            {props.name}, {props.country}</div>
          <div className='panel-header-left-item'>{props.date}</div>
        </div>

        <div className='panel-header-right'>

          <img
            src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt=''
            style={{ width: '30px', height: '30px'}}>
          </img>

          <div>{props.weather}</div>
        </div>
      </div>

      <div className='panel-chart'>
        <Chart chartData={props.historyData} temperature={temperatureValue}></Chart>
      </div>

      <div className='panel-footer'>
        <div className='panel-footer-left'>

          <div className='panel-footer-temperature'>

            <div className='digit'>
              {temperatureDigit}{Math.round(temperatureValue)}
            </div>

            <div className='upper'>
              <div className='format'>
                <span
                  style={{ color: (metrics === 'Celsius') ? '#000000' : '#8D8D8D' }}
                  onClick={() => switchMetrics('Celsius')}>°C</span>
                |
                <span
                  style={{ color: (metrics === 'Fahrenheit') ? '#000000' : '#8D8D8D' }}
                  onClick={() => switchMetrics('Fahrenheit')}>°F</span>
              </div>
            </div>

          </div>

          <div className='panel-footer-feels'>
            Feels like: <b>{feelsDigit}{Math.round(feelsValue)}{(metrics === 'Celsius') ? '°C' : '°F'}</b>
          </div>
        </div>

        <div className='panel-footer-right'>
          <div>Wind: <b
            style={{ color: (props.temperature > 0) ? '#FFA25B' : '#459DE9' }}>
            {Math.round(props.wind)} m/s</b></div>
          <div>Humidity: <b
            style={{ color: (props.temperature > 0) ? '#FFA25B' : '#459DE9' }}>
            {props.humidity}%</b></div>
          <div>Pressure: <b
            style={{ color: (props.temperature > 0) ? '#FFA25B' : '#459DE9' }}>
            {props.pressure}Pa</b></div>
        </div>
      </div>


    </div>
  );
}

export default Panel;
