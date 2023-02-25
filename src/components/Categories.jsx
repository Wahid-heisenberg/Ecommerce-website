import React from 'react'
import styled from 'styled-components'
import { categories} from '../data'
const Container =styled.div` 
display: flex;
flex:1;
padding: 15px;
justify-content: center;
height: 70vh;
position: relative
`;
const Info =styled.div` 
color: white;
margin-bottom: 19px;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
&:hover {
  transform: scale(1.1);
}
`;
const Item =styled.div` 
margin: 3px;
display: flex;
align-items: center;
justify-content: center;
flex: 1;


`;
const Image =styled.img` 
object-fit: cover;
width:100%;
height:100% ;

`;
const Button =styled.button` 
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
color: grey;
padding: 11px;
font-size: 16px;
font-weight: 600;
border: none;

`;
const Title =styled.h1` 
color: white;
margin-bottom: 19px;
object-fit: cover;

`;

const Categories = () => {
return (
<>
<Container>
{categories.map((item) => (
<Item key={item.id}>
  <Image src={item.img}/>
  <Info>
  <Title >
  {item.title}
  </Title>

  <Button>
Shop Now
  </Button>
  </Info>
  </Item>
    ))}
</Container>
  

</>
  )
}


export default Categories;