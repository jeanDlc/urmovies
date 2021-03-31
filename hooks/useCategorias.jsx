import React, {useState, useEffect} from 'react';
const useCategorias = () => {
    const [listaCategorias, setListaCategorias]=useState([]);
    useEffect(()=>{
        const getCategorias=async ()=>{
            try {
                const url=` https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US`;
                const res=await fetch(url);
                const lista=await res.json();
                setListaCategorias(lista.genres);
            } catch (error) {
                console.log(error);
            }
            
        }
        getCategorias();
        
    },[]);
    return listaCategorias;
}
 
export default useCategorias;