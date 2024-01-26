import {useState} from 'react'
import React from 'react';
function Todo(){
    
    const [num,setNum]=useState("");
    const [list1,setList1]=useState([]);
    const listAdd=()=>{
        let a=false;
        for(let i=0;i<list1.length;i++){
            if(list1[i]===num){
                a=true;
            }
        }
        if(a===false){
            list1.push(num);
            console.log(list1);
            setNum('');
        }
    };
    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" value={num} onChange={(e)=>(setNum(e.target.value))}></input>
            <button onClick={listAdd}>Add</button>
            {list1.map((e)=>(
                <span>{e}</span>
            ))
            }
        </div>
    );
}
export default Todo;