import React,{useContext,useState,useEffect} from 'react'
import {store} from './App';
import { Redirect } from 'react-router';
import axios from 'axios';
import Moment from "react-moment";

// const Myprofile = () => {
//      const [token,setToken] = useContext(store);
//      const [data,setData] = useState(null);
//     // const [allMsg,setAllMsg] = useState([]);
//     // const [newMsg,setNewMsg] = useState("");
//     // useEffect(() =>{
//     //     axios.get('http://localhost:5000/myprofile',{
//     //         headers: {
//     //             'x-token' : token
//     //         } 
//     //     }).then(res => setData(res.data)).catch((err) => console.log(err))
        
//     //     axios.get('http://localhost:5000/getmsg',{
//     //       headers: {
//     //           'x-token' : token
//     //       } 
//     //   }).then(res => setAllMsg(res.data)).catch((err) => console.log(err))
//     // },[])
//     // const submitHandler = (e) =>{
//     //     e.preventDefault();
//     //     axios.post('http://localhost:5000/addmsg',{text:newMsg},{
//     //         headers: {
//     //             'x-token' : token
//     //         } 
//     //     }).then(res => setAllMsg(res.data)).catch((err) => console.log(err))
//     // }
//     if(!token){
//         return <Redirect to='/login' />
//     }
//     return (
//       <div>
//           {
//               data &&
//           <center>
//               <br />
//               <div class="card" style={{"width": "38rem"}}>
//               <div class="card-body">
            

//                   <button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button>
//               </div>
//               </div>
//           </center>
//       }
//       </div>
//   )
// }

// export default Myprofile



const Myprofile = () => {
  return (
    <div>WElcome to Myprofile</div>
  )
}

export default Myprofile