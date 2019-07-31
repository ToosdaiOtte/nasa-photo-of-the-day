import React, { useState, useEffect } from "react";
import axios from 'axios';
import Title from './components/Title';
import Img from './components/Img';
import Explanation from './components/Explanation';
import "./App.css";

function App() {

  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [x, setX] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( result => {
        console.log(result.data)
        setImg(result.data.url);
        setTitle(result.data.title);
        setX(result.data.explanation);

      }) .catch ((error) => {
        console.log(error)
      })
  }, []);

  return (
      /* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div> */
    <div className="header">
      <Img src={img} />
      <Title title={title} />
      <Explanation info={x} />
    </div>
  );
}

export default App;
