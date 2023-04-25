import React , {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NAVBAR from '../Navbar/Navbar.js';
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
const Register = () => {
  const[passShow ,  setPassShow] = useState(false)
  const [CpassShow ,  setCPassShow] = useState(false)

    const [input  , setInput] = useState({
        
    firstName : "",
    email_id : "",
    password : "",
    confirmPassword : ""
    
      });

      const setVal = (e)=>{
    
        const {name , value} =e.target
      
        setInput({
          ...input ,
          [name] : value
        })
      }


      
  const addUserdata = async (e)=>{
    e.preventDefault()
    const {firstName, email_id , password , confirmPassword} = input
    if(firstName === ""){
      toast.error("please enter your name")
  
    }
    else if(email_id === ""){
      toast.error("please enter your email")

    }
    else if(!email_id.includes("@")){
      toast.error("enter valid email")
    }
    else if(password === ""){
      toast.error("please enter your password")

    }
    else if(confirmPassword === ""){
      toast.error("please enter your confirm  password")

    }
    
     else if(password!== confirmPassword){
        toast.error("password and confirm password do not match")
  
      }
      else{
        const data = await fetch("https://backend-savnote-ocpl.vercel.app/user/register", {
            method : "POST",
            headers : {
              "content-type" : "application/Json"
            },
            body : JSON.stringify({
              firstName , email_id , password , confirmPassword
    
            })
          });
          const res =await data.json();
       
         
           if(res.status == 201) {
            console.log("registration complete")
            alert("registration sucessfully")
          
            setInput({ ...input , firstName: "", email_id: "", password : "" , confirmPassword : "" });
           
    
          }


          else if(res.status === 404){
            toast.error("registration  unsucessfully")
          
    
          }
         
      }
    
   
    

  }

  return (
    <>
    <NAVBAR/>
     <div className='register'>
        <ToastContainer />
      <motion.h1 initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{delay : 1.5 , duration : 3}}>REGISTER PAGE</motion.h1>
      <motion.form 
                     initial = {{x:'-100vw'}} animate = {{x :0}} transition={{delay : 0.4}}
      >
      <div class="mb-3">
    <motion.label whileHover={{scale : 1.3}} for="exampleInputEmail1" class="form-label">Name</motion.label>
    <motion.input whileHover={{scale : 1.3}} type="text"  name  = "firstName"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={input.firstName} onChange={setVal}/>
  
  </div>

  <div class="mb-3">
    <motion.label whileHover={{scale : 1.3}} for="exampleInputEmail1" class="form-label">Email address</motion.label>
    <motion.input whileHover={{scale : 1.3}} type="email"  name  = "email_id"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"value={input.email_id} onChange={setVal}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <motion.label whileHover={{scale : 1.3}} for="exampleInputPassword1" class="form-label">Password</motion.label>
    <motion.input whileHover={{scale : 1.3}} type="password"  name  = "password"  class="form-control" id="exampleInputPassword1"value={input.password} onChange={setVal}/>
  </div>
  
  <div class="mb-3">
    <motion.label whileHover={{scale : 1.3}} for="exampleInputPassword1" class="form-label"> confirm Password</motion.label>
    <motion.input whileHover={{scale : 1.3}} type="password"  name  = "confirmPassword"  class="form-control" id="exampleInputPassword1"value={input.confirmPassword} onChange={setVal}/>
  </div>


  <motion.button whileHover={{scale : 1.1}}  type="submit" class="btn btn-primary" onClick={addUserdata}>Submit</motion.button>
  <motion.p whileHover={{scale : 1.3}}>Already have an account ? <Link to = "/login">LogIn</Link> </motion.p>
</motion.form>
    </div>
    
    </>
   
  )
}

export default Register
