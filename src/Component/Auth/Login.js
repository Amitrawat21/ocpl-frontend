import React , {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link , useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import NAVBAR2 from '../Navbar/Navbar2.js';


const Login = () => {
  const History  = useNavigate()

    const [input  , setInput] = useState({
  
        email_id : "",
        password : "",
     
    
      })

      const setVal = (e)=>{
    
        const {name , value} =e.target
      
        setInput({
          ...input ,
          [name] : value
        })
      }


      
  const addUserdata = async (e)=>{
    e.preventDefault()
    const { email_id , password } = input

    if(email_id === ""){
      toast.error("please enter your email")

    }
    else if(!email_id.includes("@")){
      toast.error("enter valid email")
    }
    else if(password === ""){
      toast.error("please enter your password")

    }
    
    else{
  
        const data = await fetch("https://backend-savnote-ocpl.vercel.app/user/login", {
            method : "POST",
            headers : {
              "content-type" : "application/Json"
            },
            body : JSON.stringify({
              email_id , password 
    
            })
          });

          const res =await data.json();
          console.log(res)
      
         
           if(res.status == 404) {
            toast.error("u r not register user")
    
          }


          else if(res.status === 201){
            
          toast.success("login sucessfully")
     
            setInput({ ...input , email_id: "", password : ""  });
            setTimeout(()=>{
              History('/Notes')
            }, 7000)
    
          }
        }
         
      
    
   
    

  }

  return (
    <>
    <NAVBAR2/>
    <div className='register'>
        <ToastContainer />
      <motion.h1  initial ={{opacity : 0}} animate = {{opacity : 1}} transition={{delay : 1.5 , duration : 3}}>LOGIN PAGE</motion.h1>
      <motion.form     initial = {{x:'-100vw'}} animate = {{x :0}} transition={{delay : 0.4}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text"  name  = "email_id"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"value={input.email_id} onChange={setVal}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password"  name  = "password"  class="form-control" id="exampleInputPassword1"value={input.password} onChange={setVal}/>
  </div>
  
 


  <button type="submit" class="btn btn-primary" onClick={addUserdata}>Submit</button>
  <p>to register ?<Link to = "/"> signup here</Link>  </p>
</motion.form>
    </div>
    </>
  )
}

export default Login
