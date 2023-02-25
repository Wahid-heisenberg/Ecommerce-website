import React from 'react'
import Navbar from '../components/Navbar'
import Add from '../components/Add'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Title from '../components/Title'
import Contact from '../components/Contact'
function Home() {
  return (

    <>
    <Add/>
    <Navbar/>
    <Slider/>
    <Title text="Categories"/>
    <Categories/>
    <Title text="Products"/>
    <Products/>
    <Title text='Contact us'></Title>
    <Contact/>
    </>
  )
}

export default Home;

