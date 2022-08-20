import CityInfo from "./Cityinfo";
import 'typeface-roboto';

export default {
  title: 'CityInfo',
  component: CityInfo
}

export const CityExample = () => (<CityInfo city={'México'} country="CDMX"></CityInfo>)