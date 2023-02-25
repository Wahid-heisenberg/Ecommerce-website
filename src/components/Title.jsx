import React from 'react'
import styled from 'styled-components'
const Container =styled.h1` 
display: flex;
justify-content: center;
align-items: center;
font-weight: 590;
font-size: 58px;

`;
const Title = (props) => {
  return (
   
<Container >
    {props.text}
</Container>
   
  )
}

export default Title
