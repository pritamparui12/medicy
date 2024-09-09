import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Featuresmain from './components/feturesmain'
import CatalogBanner from './components/catalog-banner'
import Footer from './components/footer'
import SubBanner from './components/banner2'
import Faq from './components/faq'
import Hero from './components/hero'
import Features from './components/features'
import ImageSlider from './components/imgslider'
import Testimonial from './components/testimoni'


function App() {
  

  return (
    <>
       <Header/>
      <ImageSlider/>
      <Featuresmain/>
      <Hero/>
      <CatalogBanner/>
      <Features/>
      <SubBanner/>
      <Testimonial/>
      <Faq/>
      <Footer/>
     
      </>
  )
}

export default App
