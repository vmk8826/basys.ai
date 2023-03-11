import Sidebar from "./Components/Sidebar";
import Mainbar from "./Components/Mainbar";
import Cards from "./Components/Cards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
    {/* <Router> */}
    <Sidebar/>
    {/* <Switch> */}
        {/* <Route path="/about">
        <Mainbar />
        </Route>
        <Route path="/users">
        <Cards />
        </Route>
      </Switch>    */}
    {/* </Router> */}
    </>
    
  );
}

export default App;
