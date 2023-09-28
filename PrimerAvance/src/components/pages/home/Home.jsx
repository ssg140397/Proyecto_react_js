import App from "../../../App";
import { useState } from "react";

const Home = () => {

    const [counter, setCounter] = useState (0)
    
    const [darkMode, setDarkMode ] = useState (false)
    
    const switchMode = () => {
        setDarkMode (!darkMode)
    }

    const sumar = () => {
        setCounter (counter + 1)
    }
    return (
      <div>
        <h4>{counter}</h4>
        <button onClick={sumar}>Sumar</button>
        <button onClick={switchMode}></button>
      </div>
    );
    };

export default Home;
