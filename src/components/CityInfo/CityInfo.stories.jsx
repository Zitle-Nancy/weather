import CityInfo from "./Cityinfo";

export default {
  title: 'CityInfo',
  component: CityInfo
}

export const CityExample = () => (<CityInfo city={'México'} country="CDMX" />)