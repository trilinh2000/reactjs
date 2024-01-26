import { useState } from "react"

const From=()=>{
    const [state,setState]=useState({username:"",age:null,error:""});
    
    // const submitHandle=(e)=>{
    //     e.preventDefault();
    //     alert("You are submitting " + state.username);
    // }
    const handleChange=(e)=>{
        let err="";
        if(e.target.name==="age"){
            if(e.target.value!==""&&!Number(e.target.value)){
                err="you a must be number";
            }
        }
        setState({...state,[e.target.name]:e.target.value,error:err});
    }
    
    return(
        <form>
            <p>UseName:{state.username}</p>
            <p>Age:{state.age}</p>
            <input type="text" name="username" onChange={handleChange}></input>
            <input type="text" name="age" onChange={handleChange}></input>
            <input type="Submit"></input>
            {state.error}
        </form>
    )
}
export default From;