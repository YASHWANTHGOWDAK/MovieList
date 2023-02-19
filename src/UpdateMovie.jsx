import { useParams,useHistory } from "react-router-dom";
import { useState } from "react";

function UpdateMovie()
{

    
    let {id}=useParams();

    let h=useHistory();

    let [movieName, setMovieName]= useState("");
    let [hero, setHero]= useState("");
    let [gener, setgener]= useState("");
    let [rating,setRating]= useState("");
    let [poster, setPoster]= useState("");

    
    let handleupdatemovie = (e)=>{
        e.preventDefault();
        let UpdatedMovie = {movieName , hero , gener , rating , poster }

        fetch("http://localhost:4000/movies/"+id, {method:"PUT",
                                                headers:{"Content-Type":"application/json"},
                                                body:JSON.stringify(UpdatedMovie)})
        .then(()=>{
            alert(" movie successfully updated")
            h.push("/")
        })   

                                     
    }


    return(

        <div className="update-movie">
            <h1>Update Movie</h1>

            <form onSubmit={handleupdatemovie}>
            
            <label> Movie Name:</label> <input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}}/>
            <label> hero:</label> <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value)}}/>
            <label> Gener:</label> <input type="text" value={gener} onChange={(e)=>{setgener(e.target.value)}}/>
            <label> Rating:</label> <input type="number" min=".1" max="5" step=".1" value={rating} onChange={(e)=>{setRating(e.target.value)}}/>
            <label> Poster:</label> <input type="url" value={poster} onChange={(e)=>{setPoster(e.target.value)}}/>
            <input type="submit" value="Update Movie"/>

           

        </form>
        </div>
    )
}
export default UpdateMovie