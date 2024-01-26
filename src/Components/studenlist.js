import { useState } from "react";

function Student(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [list,setList]=useState([]);
    const listadd=()=>{
        let x=true;
        for(let i=0;i<=list.length;i++){
            if(list[i]===email){
                x=false;
            }
        };
        if(x===true){
            list.push({name,email,phone});
            console.log(list);
            setName('');
            setEmail('');
            setPhone('');
        }
    }
    return(
        <div>
            <h1>Student List</h1>
            <label>Name:</label>
            <input name="name" value={name} onChange={(e)=>(setName(e.target.value))}></input>
            <label>Email:</label>
            <input name="email" value={email} onChange={(e)=>(setEmail(e.target.value))}></input>
            <label>Phone:</label>
            <input name="phone" value={phone} onChange={(e)=>(setPhone(e.target.value))}></input>
            <button onClick={listadd}>Submit</button>
            {list.map((items)=>(
                <table>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                Email
                            </td>
                            <td>
                                Phone
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {items.name}
                            </td>
                            <td>
                               {items.email} 
                            </td>
                            <td>
                                {items.phone}
                            </td>
                        </tr>
                </table>
            ))}
        </div>
    )
}
export default Student;