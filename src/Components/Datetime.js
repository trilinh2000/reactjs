import { useState } from "react";

function Unclock(){
    const [time,setTime]=useState();
    const [ampm,setAmpm]=useState("");
    const updateTime=()=>{
        let dateinfor=new Date();
        let hour=0;
        if(dateinfor.getHours()===12){
            hour=0;
        }
        else if(dateinfor.getHours()>12){
            hour=dateinfor.getHours()-12;
        }
        else{
            hour=dateinfor.getHours();
        }
        let minutes=dateinfor.getMinutes()<10?parseInt("0"+dateinfor.getMinutes()):dateinfor.getMinutes();
        let seconds=dateinfor.getSeconds()<10?parseInt("0"+dateinfor.getSeconds()):dateinfor.getSeconds();
        let ampm=dateinfor.getHours()>=12?"PM":"AM"
        setAmpm(ampm);
        setTime(`${hour}:${minutes}:${seconds}`);
    }
    setInterval(function(){
        updateTime();
    },1000);
    return [time,ampm];
}
export default Unclock;