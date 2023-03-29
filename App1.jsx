import React,{useState} from 'react'
import Nav from './component/Nav'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './component/Home'
import Login from './Login'
import  About from './component/About'
import PageNotFound from './component/PageNotFound'
import './global.css'
import Signin from './Signin'


 const App1 = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    
    
const handleSubmit=(e)=>{
    e.preventDefault()
    
}
const onChange=(e)=>{
    setUsername(e.target.value)
}
  return (
    
    <Router>
    <Nav/>  
    <Routes>
      <Route path="*" element={<PageNotFound/>}></Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path= "/Signin" element={<Signin/>}/>
      <Route path="/About" element={<About/>}/>

    {/* <form onSubmit={handleSubmit} action="">
    <Signin placeholder="Username" setUsername={setUsername} maxlength="12" required/>
    <Signin placeholder="email"/>
    <Signin placeholder="Password" setPassword={setPassword}/>
    <Signin placeholder="Confirm Password" setConfirm={setConfirm}/>
    <button onClick={handleSubmit}>Sign in</button>
    </form>
     */}
    </Routes>
    </Router>
  )
}
export default App1;
