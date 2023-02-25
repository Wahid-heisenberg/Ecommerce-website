import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import{ React,useState}  from 'react'
import styled from 'styled-components'
import { sliderItems} from '../data'

const Container =styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Left =styled.div` 
width: 100%;
height: 100%;
flex: 1;
padding: 55px ;
`;

const Image =styled.img` 
width: 100%;
height: 80%;
flex: 1;

`;
const Wrapper=styled.div` 
display: flex;
min-width: 100%;

`;
const Slide=styled.div` 
align-items: center;
justify-content: space-between;
min-width: 100vw;
height: 100vh;
display: flex;
transition: all 1.5s ease;
padding:0px 15px 0px 15px;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Button =styled.button` 
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
padding: 11px;
font-size: 19px;
font-weight: 550;
transition: ease-out 0.4s;
border:2px solid black;
&:hover {
  transform: scale(1.1);
  background-color: teal;
  color: white;
  border:2px solid grey;
}
`;
const Title =styled.h1` 
font-size: 60px;
`;
const Right =styled.div` 
flex: 1;
padding: 18px;

`;
const Desc =styled.p` 
margin: 50px 2.5px 50px 0px;
font-size: 20px;
letter-spacing: 3px;
font-weight: 580;
flex-wrap: wrap;
margin-right: 15px;
`;

const Arrow =styled.div` 
  width: 50px;
  height: 50px;
  background-color: #80cdcd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
function Slider() {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return (
   <>
   <Container>
    <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined/>
    </Arrow>

 <Wrapper slideIndex={slideIndex} >
 {sliderItems.map((item) => (
<Slide bg={item.bg} key={item.id}>

  <Left>
  <Image src={item.img}/>
  </Left>

<Right>
    <Title>
    {item.title}
    </Title>
  <Desc>
  {item.desc}
   </Desc>
   <Button>
   SHOW NOW
   </Button>
</Right>
</Slide>
))}
</Wrapper>
<Arrow direction="right"  onClick={() => handleClick("right")}>
        <ArrowRightOutlined/>
    </Arrow>
</Container>
   </>
  )
}

export default Slider;
