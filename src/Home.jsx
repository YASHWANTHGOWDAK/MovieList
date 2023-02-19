import { useEffect } from "react";
import { useState } from "react"
import Movieslist from "./Movieslist"

function Home()
{

    let [movies, setMovies]= useState (null);
    let [pending, setPending]= useState (true);
    let [error, seterror]= useState (null);


    useEffect(()=>{

     setTimeout(()=>{
      fetch("http://localhost:4000/movies")
      .then((res)=>{ 
        if(res.ok==true)
        {
            return(res.json())
        }
        else
        {
            throw Error("data that you are searching for is not present")
        }
    })
      .then((data)=>{setMovies(data); setPending(false) })
      .catch((error)=>{seterror(error.message);  setPending(false)})
     } , 2000 ) 

    } , [])

       return(
        <div>
            {error && <h1> {error}</h1> }
            { pending  &&  <div className="loader"></div> }
            {movies && <Movieslist movies={movies} title="All movies"/>}
       </div>

       )
}

export default Home
