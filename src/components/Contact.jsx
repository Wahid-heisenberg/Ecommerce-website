
import React from 'react'
import styled from 'styled-components'
import { Send } from '@mui/icons-material';
const Container =styled.div` 
display: flex;

text-align: center;


align-items: center;
justify-content: center;
flex-direction: column;
height: 40vh;

`;
const Form =styled.div` 
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Button =styled.button` 
cursor: pointer;
flex:1;
display: flex;
align-items: center;
justify-content: center;
background-color:teal;
color: white;
padding: 5px;
font-size: 16px;
font-weight: 600;
border: none;
height: 100%;
width:30px;
`;
const Desc =styled.p` 
margin: 50px 2.5px 50px 0px;

font-size: 20px;
letter-spacing: 3px;
font-weight: 580;
max-width: 50%;
flex-wrap: wrap;
margin-right: 15px;
`;
const InputContainer =styled.div` 
 width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  flex:7;
  padding: 0px 15px;
`;
const Contact = () => {
  return (
<>
<Container>
    
    <Desc>
        Lorem ipsum dolor sit, amet consectetur adipisicino nsectetur adipisicingctetur adipisicing elit. Fugitg elit. Fugitonsectetur adipisicing elit. Fugit 
    </Desc>
    <Form>
      <InputContainer>
      <input type="text" className='Message' name="" id="" />
      </InputContainer>
      <Button>
        <Send/>
        </Button>
    </Form>

</Container>
</>
  )
}

export default Contact
