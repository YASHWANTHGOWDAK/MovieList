import { useState } from "react";

function Conditionalrendering()

{
 
    let[gender, setGender]=useState("male");
    
    return(
        <div>
       
      {gender=="male"? <h1> 👨‍🎨 </h1>: <h2> 👩‍🎨 </h2> }

      <button onClick={()=>{setGender("male")}}> change to male</button>
      <button onClick={()=>{setGender("female")}}> change to female</button>


        </div>
       
    )
}

export default Conditionalrendering;