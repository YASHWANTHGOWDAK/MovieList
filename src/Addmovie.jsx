import { useState } from "react"
import { useHistory } from "react-router-dom"

function Addmovie()
{


    let h=useHistory();

    let [movieName, setMovieName]= useState("");
    let [hero, setHero]= useState("");
    let [gener, setgener]= useState("");
    let [rating,setRating]= useState("");
    let [poster, setPoster]= useState("");


        let handleAddmovie = (e)=>{
            e.preventDefault();
            let newMovie = {movieName , hero , gener , rating , poster }
    
            fetch("http://localhost:4000/movies", {method:"POST",
                                                    headers:{"Content-Type":"application/json"},
                                                    body:JSON.stringify(newMovie)})
            .then(()=>{
                alert("new movie successfully added")
                h.push("/")
            })   

                                         
        }
        

    return(

        <div className="add-movie">

        <h1> add movie</h1>

        <form onSubmit={handleAddmovie}>
            
            <label> Movie Name:</label> <input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}}/>
            <label> hero:</label> <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value)}}/>
            <label> Gener:</label> <input type="text" value={gener} onChange={(e)=>{setgener(e.target.value)}}/>
            <label> Rating:</label> <input type="number" min=".1" max="5" step=".1" value={rating} onChange={(e)=>{setRating(e.target.value)}}/>
            <label> Poster:</label> <input type="url" value={poster} onChange={(e)=>{setPoster(e.target.value)}}/>
            <input type="submit" value="Add Movie"/>
            

        </form>
        
        </div>
    )
}

export default Addmovie