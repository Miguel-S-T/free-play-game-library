import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import GamesList from "./Components/GamesList";
import GameDetails from "./Components/GameDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={GamesList} />
        {/* <Route path="/games/:id" component={GameDetails} /> */}
      </Switch>
    </div>
  );
}

export default App;
