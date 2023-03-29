//import React,{useState,useEffect} from "react"

//import App1 from "./App1"
//import Hoc from "./Hoc"
//import React,{Component} from 'react'
// import React,{useState} from "react"

 import React,{useState,useRef} from "react"
 import IMG from "./pikachuuu.png"
 //import VIDEO from "./video.mp4"

 //import React,{useRef} from 'react'
// import {ToastContainer,toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

//const App=()=>{
//     let handleSubmit=()=>{
//         toast.success("Logged in successfully",{position:toast.POSITION.TOP_CENTER})
//     }
//         return(
//             <div>
//                 <ToastContainer/>
//                 <button onClick={handleSubmit}> click for change</button>
//             </div>
//         )
// }
//export default App;
// export default class App extends Component {
//     constructor()
//     {
//         super()
//         this.state={
//             username:""
//         }
//     }
    // componentDidMount()     //non-synthetic event 
    // {
    //     let input=document.querySelector('input')
    //     input.addEventListener('keypress',(e)=>{
    //         this.setState({username:e.target.value})
    //     })
    // }
  //render() {
   // return (
      <>
      {/* <h1>{this.state.username}</h1>   //synthetic  event
      <input type="text" onChange={(e)=>{
        this.setState({username:e.target.value})
      }} /> */}
      </>

// const App=()=>
// {
//     let h1Ref=useRef()
//     let handleChange=()=>
//     {
//       h1Ref.current.style.color="green"
//     }
//       return(
//         <>
//         <h1 ref={h1Ref}>APPPP</h1>
//         <button onClick={handleChange}>change</button>
//         </>
//       )
//     }

// export default App
 const App=()=>
 {
   let[photo,setPhoto]=useState(IMG)
   let[loading,setLoading]=useState(true)
   let imgRef=useRef()

  let handleChange=()=>{
     if(loading==true)
     {
      setLoading(!true)
       imgRef.current.style.borderRadius="20%"
      imgRef.current.style.border="5px solid red"
    }
     else{
       setLoading(!false)
       imgRef.current.style.border="0px"
      imgRef.current.style.border="none"
     }
   }
  return(
     <div>
       <img src={photo} alt="pikachu" ref={imgRef} height="300px" width="300px"/>
       <button onClick={handleChange}>{loading ? "ON":"OFF"}</button>
   </div>
   )
 }
 export default App;  

// const App=()=>{
//   let [video,setVideo]=useState(VIDEO)
//   let [loading,setLoading]=useState(false)
//   let videoRef=useRef()
//   let playOrPause=()=>{
//     if(!loading)
//     {
//       setLoading(true)
//       videoRef.current.play()
//     }
//     else{
//       setLoading(false)
//       videoRef.current.pause()
//     }
//   }
//   return(
//     <div>
//       <video src={video} onClick={playOrPause} ref={videoRef}></video>
//     </div>
//   )
// }
// export default App;  (youtube feature of video)


// const App=()=>
// {

//   let [user,setUser]=useState("")
//   let[ pass,setPass]=useState("")
//   let handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log({user,pass});
//   }
//   return(
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="username">Username</label><br />
// <input type="text" id="username" onChange={(e)=>{
//   setUser(e.target.value)
// }} /> <br />
// <label htmlFor="password">Password</label> <br />
// <input type="password" id="password" onChange={(e)=>{
//   setPass(e.target.value)
// }} /> <br />
// <button>Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App; (controlled forms using function based)

// export default class App extends Component { 
//   constructor(){
//     super()
//     this.state={
//       username:"",
//       password:""
//     }
//   }
//   handleSubmit=(e)=>
//   {
//     e.preventDefault()
//     let A= this.state.username
//     let B=this.state.password
//   localStorage.setItem(A,B)
    
// }
//   render() {
//     return (
//       <div>
//         <form action="" onSubmit={this.handleSubmit}>
//         <label htmlFor="username">Username</label><br />
// <input type="text" id="username" onChange={(e)=>{
//   this.setState ({username:e.target.value})
// }} /> <br />
//  <label htmlFor="password">Password</label> <br />
//  <input type="password" id="password" onChange={(e)=>{
//  this.setState({password:e.target.value})
// }} /> <br />
//  <button>Submit</button>
//        </form>
        
//       </div>
//     )
//   }
// }         (controlled forms using class based)
// const App=(props)=>{
//   return(
//     <div>{props.data}</div>
//   )
// }
// export default Hoc(App); (overcome prop drilling using HOC)
// const App=()=>{
//   let [userDta,setUserData]=useState([])
//   useEffect{()=>{
//     window.fetch("https://api.github.com/users")
//     .then((x)=>x.json())
//     .then((data)=>setUserData(data))
//     .catch((err)=>err)
//   },[]}
//   return(
//     <div>
//       {useRouteLoaderData.map((x,index)=>{
//         console.log(index);
//         return(
//           <li key={index}>{x.login}</li>
//         )
//       })}
//     </div>
//     //<App1/>
//   )
// }
// export default App;