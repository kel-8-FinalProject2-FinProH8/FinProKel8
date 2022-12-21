import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchapi } from '../store/reducer/MovieSlice'

const useHome = () => {
    const dispatch = useDispatch()
    const [Search , setSearch] = useState("indonesia")
    const movies = useSelector((state) => state.MovieSlice)
    const handleChageSearch = (e)=>{
      setSearch(e.target.value)
    }

    const handleSearch = ()=>{
      dispatch(fetchapi(Search))
    }

    useEffect(()=>{
        dispatch(fetchapi(Search))
    },[dispatch])
    return {movies, handleChageSearch, handleSearch}
}

export default useHome