/**
 * Se crea un alias (Router) con la finalidad de que si deseamos cambiar la forma de enrutar en este caso BrowserRouter se haga solo en esta linea y nuestro alias nos ayude hacer las modificaciones apropiadas.
 */
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CityPage from "./pages/CityPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomePage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main">
          <MainPage />
        </Route>
        <Route exact path="/city">
          <CityPage />
        </Route>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
