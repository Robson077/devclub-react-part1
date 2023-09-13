import React from 'react';
import styled from "styled-components"


const Caixa = styled.div`
  background: black;

`

const Title = styled.h1`
  font-size: 50px;
`


export default function App() {
  return (
    <div>
      <Title>Hellitz!</Title>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
