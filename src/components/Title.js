import React from 'react';
import styled from 'styled-components';

const TitleH1 = styled.h1`
    text-align: center;
`

export default function Title(props) {
    return <TitleH1 className="title">{props.title}</TitleH1>
}
