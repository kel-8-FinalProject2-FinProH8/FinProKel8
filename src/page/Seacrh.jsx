import React, { useEffect } from 'react'
import { loading } from '../assets';
import useHome from './useHome'
import './Home.css';
import Card from './Card';

const Seacrh = () => {
  const {movies} = useHome()
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', paddingTop: '50px', justifyContent:'center', gap: '50px', padding : '10px'}} >
        {movies.loading ? (
            <div style={{animation : 'ease-in' , animationDuration: 'unset 5s'}}>
                <img src={loading} alt="" />
            </div>
        ): (
            movies.movies.map((item, i)=>{
                return(
                    <Card  movies={item}/>
                )
            })
        )}
    </div>
  )
}

export default Seacrh