import React from 'react';
import styled from 'styled-components';

const DateDiv = styled.p`
    text-align: center;
    font-size: 0.8rem;
`;

export default function Date(props){
    return <DateDiv className="date"><i>{props.date}</i></DateDiv>
}