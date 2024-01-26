// // import { useState } from 'react';
// import Caculator from "./Components/component";
// function App(){
//     // const[isLogin,setLogin]=useState('false')
//     // if(isLogin==='true'){
//     //   return(
//     //   <Hello onLogOut={()=>{setLogin('false')}}/>
//     //   );
//     // }
//     // return (
//     //   <div style={{textAlign: 'center'}}>
//     //     <div>
//     //         <h1>Please Log in</h1>
//     //         <button onClick={()=>{setLogin('true')}}>Log in</button>
//     //     </div>
//     //   </div>
//     // )
//     return (
//       <div class="alert alert-warning" role="alert">
//         <Caculator />
//       </div>
//     )
// }
// export default App;
// import { useState } from 'react';
// import Hello from "./Components/component";
// function App(){
//   const [dishPlay,setDishPlay]=useState('false');
//   if(dishPlay==='true'){
//     return(
//         <Hello close={()=>{setDishPlay('false')}}/>
    
//     )
//   }
//   return (
//     <div>
//         <button onClick={()=>{setDishPlay('true')}}>Xem gioi thieu</button>
//     </div>
//   )
// }
// export default App;
import Todo from './Components/todoapp';
import Student from './Components/studenlist';
import Unclock from './Components/Datetime';
import Car from './Components/selectcar';
import Timer from './Components/Timer';
import Count from './Components/counter';
import From from './Components/from';
import Upload from './Components/inputupload';
function App(){
  const [time,Ampm]=Unclock();
  return(
    <div>
      <Todo/>
      <Student/>
      {time}
      {Ampm}
      <Car/>
      <Timer/>
      <Count/>
      <From/>
      <Upload/>
    </div>
    
  )
}
export default App;