import React from 'react'
import Navbar from '../component/Navbar'
import './Home.css'
import Seacrh from './Seacrh'
import useHome from './useHome'

const Home = () => {
  const {handleChageSearch, handleSearch} = useHome()
  return (
    <div>
        <Navbar handleChageSearch= {handleChageSearch} handleSearch={handleSearch}/>
        <div style={{width : '100%'}}>
        <Seacrh />
        </div>
        
    </div>
  )
}

export default Home