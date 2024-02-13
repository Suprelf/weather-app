import WeatherHistoryData from "./weatherHistoryData"

export default interface City {
    id: string

    lat: number
    lon: number
    name: string
    country: string

    date: string

    temperature: number
    weather: string
    wind: number
    humidity: number
    pressure: number
    feels: number

    icon: string
    metrics: string

    historyData: Array<WeatherHistoryData>
}