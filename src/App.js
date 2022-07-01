import { useState } from "react";
import "./App.css";
import axios from "axios";
import Citycomponent from "./modules/Citycomponent";
import Wetherinfo from "./modules/Wetherinfo";
function App() {
  const [city, updatecity] = useState();
  const [wether, updatewether] = useState();

  // const fetchwether= async (e)=>{
  //   e.preventDefault();
  //   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f66153982a275eb857428a4be592907`)
  //   console.log(response);

  // }
  const fetchwether = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f66153982a275eb857428a4be592907`
      )
      .then((response) => {
        updatewether(response.data);
      });
  };
  return (
    <div className="App">
      {/* <Citycomponent updatecity={updatecity} fetchwether={fetchwether}/> */}
      {wether ? (
        <Wetherinfo wether={wether} />
      ) : (
        <Citycomponent updatecity={updatecity} fetchwether={fetchwether} />
      )}
    </div>
  );
}

export default App;
