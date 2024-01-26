import { useEffect, useState } from "react";

function Timer(){
    const [timer,setTimer]=useState(10);
    if(timer===0){
        setTimer(11);
    }
    useEffect(()=>{
        function ab(){
        setInterval(setTimer(timer-1),1000); 
        }
        return function cleanup(){
            ab();
            console.log(timer)
        } ;
    });
    return (
        <div>
            {timer}
        </div>
    )
}
export default Timer;