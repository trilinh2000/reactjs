// import {useState} from 'react'
// function Caculator(){
//     const [number, setNumber] = useState(0);
//     const [number1, setNumber1] = useState(0);
//     const [result, setResult] = useState(0);
//     console.log(number);
//     console.log(number1);
//     return(
//         <div>
//             <input type="text" onChange={(e)=>{setNumber(parseInt(e.target.value))}} name="text1" id="text1"></input>
//             <input type="text" onChange={(e)=>{setNumber1(parseInt(e.target.value))}} name="text1" id="text1"></input>
//             result:{result}
//             <button onClick={()=>{setResult(number+number1)}}>+</button>
//             <button onClick={()=>{setResult(number-number1)}}>-</button>
//             <button onClick={()=>{setResult(number*number1)}}>X</button>
//             <button onClick={()=>{setResult(number/number1)}}>/</button>
//         </div>
//     );
// }
// export default Caculator;
// function Hello(props){
//     return(
//         <div>
//             <button onClick={props.close}>Đóng Giới Thiệu</button>
//             <h1>Giới thiệu</h1>
//         </div>
        
//     )
// }
// export default Hello;