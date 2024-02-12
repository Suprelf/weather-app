import React, { useEffect, useState } from 'react';
import './chart.scss';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import WeatherHistoryData from '../../interfaces/weatherHistoryData';


function Chart(props: any) {

  const [historyWeatherData, setHistoryWeatherData] = useState<Array<WeatherHistoryData>>(props.chartData)
  const [temperature, setTemperatureDigit] = useState<number>(props.temperature)

  return (
    <ResponsiveContainer>
      <AreaChart
        data={historyWeatherData}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>

        <defs>
          <linearGradient id="colorWarm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFA25B" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#FFA25B" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="colorCold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.05} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.6} />
          </linearGradient>
        </defs>

        <XAxis dataKey="date" interval="preserveStartEnd" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="temperature"
          stroke={(temperature > 0) ? "#FFA25B" : "#5B8CFF"} fillOpacity={1}
          fill={(temperature > 0) ? "url(#colorWarm)": "url(#colorCold)"} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
