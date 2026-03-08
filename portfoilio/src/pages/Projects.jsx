import React from 'react'
import Carddata from '../components/Carddata'
import data from '../arrays/data'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Carddata data={data}/>
      <Footer/>
    </div>
  )
}

export default Projects
