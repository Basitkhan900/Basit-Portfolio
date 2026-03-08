import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Aboutsec from '../components/Aboutsec'
import SkillSec from '../components/SkillSec'
import Carddata from '../components/Carddata'
import data from '../arrays/data'
import Contactsec from '../components/Contactsec'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Aboutsec/>
      <SkillSec/>
      <Carddata data={data}/>
      <Contactsec/>
      <Footer/>
    </div>
  )
}

export default Home
