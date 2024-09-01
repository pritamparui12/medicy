import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Featuresmain from './components/feturesmain'
import CatalogBanner from './components/catalog-banner'
import Footer from './components/footer'
import SubBanner from './components/banner2'
import {Slider } from './carosal'
import Faq from './components/faq'
import Hero from './hero'
import Features from './components/features'


function App() {
  

  return (
    <>
      <Header/>
      <Slider/>
      <Featuresmain/>
      <Hero/>
      <CatalogBanner/>
      <Features/>
      <SubBanner/>
      <Faq/>
      <Footer/>
      </>
  )
}

export default App
