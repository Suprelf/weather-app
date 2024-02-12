export default interface City {
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

    icon?: string
    defaultMetrics?: string

    historyData: Array<any>
}




//add Icon
//add Celsius/Fahrenheit 