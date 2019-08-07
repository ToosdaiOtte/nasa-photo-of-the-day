import React from 'react';
import styled from 'styled-components';

const CardImg = styled.img `
    width: 50%;
    margin-left: 24%;
    box-shadow: 10px 10px 5px grey;
`;
export default function Img(props){
    if (!props.src) return <h3>Loading...</h3>;
    return <CardImg className="picture" src={props.src} alt=""/>
}