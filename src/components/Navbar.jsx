import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import { Badge, MenuItem } from '@mui/material';
import {  ShoppingCartOutlined } from '@mui/icons-material';
import { teal } from '@mui/material/colors';


const Container =styled.div` 
height: 58px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 padding: 18px;
 overflow-y: hidden;
`;

const Left =styled.div` 
 display: flex;
 flex-direction: row;
 align-items: center;
 flex: 1;
 
`;
const SearchContainer =styled.div` 
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 5px;
border: 1px solid teal;
border-radius: 3px;
padding: 3px 8px;
`;
const Middle =styled.div` 
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 font-weight: 600;
`;

const Right =styled.div` 
 flex: 1;
 display: flex;
 flex-direction: row;
 justify-content: flex-end;
 align-items: center;
`;


function Navbar() {
  return (

    <>
<Container>
<Left>

  <select className='languages' name="languages" id="languages">
  <option value="English">EN</option>
    <option value="Arabic">AR</option>
    <option value="French">FR</option>
  </select>

<SearchContainer>
<input type="search" name="" id="" placeholder='Search' />
<Search style={{ color: teal[300] }} />
</SearchContainer>

</Left>

<Middle>
<h1>Shopify</h1>
</Middle>
<Right>
<MenuItem>
Register
</MenuItem>
<MenuItem>
Sign In
</MenuItem>
<MenuItem>

<ShoppingCartOutlined/>
<Badge className='Badge' badgeContent={9} color="primary"> </ Badge>
</MenuItem>

</Right>
</Container>
</>
  )
}

export default Navbar
