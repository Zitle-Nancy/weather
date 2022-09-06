import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const ForecastChart = ({data}) => {
  return (
    <LineChart
      width={700}
      height={250}
      data={data}
      margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
    >
      <XAxis dataKey="dayHour"/>
      <YAxis/>
      <CartesianGrid/>
      <Tooltip/>
      <Legend/>
      <Line type="monotone" dataKey="max" stroke='#ff0000'/>
      <Line type="monotone" dataKey="min" stroke='#0000ff'/>
    </LineChart>
  )
}

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    dayHour: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  })).isRequired
}

export default ForecastChart
