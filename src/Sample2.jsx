
import {useState} from 'react'
function Sample2()
{

    let[val,setVal]=useState(10)

    let increase=()=>{
    //    val=val+10;
       setVal(val+10)
    // console.log(val);
    }

    let decrease=()=>{
        setVal(val-10)
    }

    return(
      <div>
        <h1 id="head">{val}</h1>

        <button onClick={increase}> increase </button>
        <button onClick={decrease}> decrease </button>


      </div>

    )

}
export default Sample2;