let Sample= ()=>
{

    let a=()=>{
      alert("this is 0 paramerterd function");
    }

    let b=(val)=>{
        alert("this is 0 paramerterd function");
    }
    
    
    return(
    <div className="box"> 
        
        <button onClick={a}> call a </button>
        <button onClick={()=>{b(10)}}> call b </button>

    </div>
 
   )
}

export default Sample;