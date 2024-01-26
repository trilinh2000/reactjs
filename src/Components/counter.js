import { useState } from "react"

function Count(){
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
return(
    <div>
        <p>{count1}</p>
        <button onClick={()=>(setCount1(count1+1))}>Add1</button>
        <p>{count2}</p>
        <button onClick={()=>(setCount2(count2+2))}>Add1</button>
    </div>
)
}
export default Count;