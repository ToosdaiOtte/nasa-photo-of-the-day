import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Title from './components/Title';
import Date from './components/Date';
import Img from './components/Img';
import Explanation from './components/Explanation';
import "./App.css";

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  box-sizing: border-box;
  padding-top: 5%;
`;

function App() {

  const [data, setData] = useState({});

  // const [img, setImg] = useState();
  // const [title, setTitle] = useState();
  // const [date, setDate] = useState();
  // const [x, setX] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( result => {
        console.log(result.data)
        // setImg(result.data.url);
        // setTitle(result.data.title);
        // setDate(result.data.date);
        // setX(result.data.explanation);
        setData(result.data);

      }).catch ((error) => {
        console.log(error)
      });
  }, []);

  return (
      /* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div> */
    <Container className="cardContainer">
      <Img src={data.url} />
      <Title title={data.title} />
      <Date date={data.date} />
      <Explanation info={data.explanation} />
    </Container>
  );
}

export default App;
