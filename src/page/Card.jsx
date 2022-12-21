import React from 'react'

const Card = ({movies}) => {
    console.log(movies,  "mantab jiwa");
  return (
    <div style={{height:'230px', width: '300px', borderRadius: '2px 2px 0 0', alignItems:'center', backgroundColor: 'red', cursor : 'pointer'}}>
        <img src={movies.Poster} alt="" style={{objectFit: 'cover', height: '200px', width: '300px', borderRadius: '2px 2px 0 0'}} />
        <div style={{width: '100%', height: '30px',display:'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <span style={{textAlign: 'center', backgroundColor: 'red', fontSize: '10px', fontWeight: 'bold', color:'white'}}>{movies.Title}</span>
        </div>
    </div>
  )
}

export default Card