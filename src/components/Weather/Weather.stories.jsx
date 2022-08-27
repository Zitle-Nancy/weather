import WeatherComponent from './Weather'

export default {
  title: 'Weather',
  component: WeatherComponent
}

export const WeatherCloud = () => (<WeatherComponent temperature={10} weather="cloud"/>)
export const WeatherRain = () => (<WeatherComponent temperature={10} weather="rain"/>)