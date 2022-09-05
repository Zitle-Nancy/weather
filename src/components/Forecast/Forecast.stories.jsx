import Forecast from './Forecast'

export default {
  title: "Forecast",
  component: Forecast
}

const forecastItemList = [
	{ hour: 18, state:"fog", temperature:-1, weekDay:"Jueves" },
	{ hour: 6, state:"sunny", temperature:28, weekDay:"Viernes" },
	{ hour: 12, state:"sunny", temperature:32, weekDay:"Viernes" },
	{ hour: 18, state:"cloudy", temperature:19, weekDay:"Viernes" },
	{ hour: 6, state:"rain", temperature:17, weekDay:"Sábado" },
	{ hour: 12, state:"cloud", temperature:17, weekDay:"Sábado" }, 
]

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
)