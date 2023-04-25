import React, { useState , useEffect } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import "./Note.css"
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import SingleCard from "./SingleCard";
import NAVBAR3 from "../Navbar/Navbar3.js";

import { Card, ListGroup } from 'react-bootstrap';


const SaveNote = () => {
 

  const [val , setval] = useState(false)
    const [notes, setNotes] = useState([]);


    const [firstName , setfirst] = useState("")
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFirstChange = (event)=>{
    setfirst(event.target.value)

  }

  const handleSaveNote = async (event) => {
    event.preventDefault();
    
    const response = await axios.post("https://backend-savnote-ocpl.vercel.app/note/addnote", { firstName ,title, Description  });
    toast.success("note added sucessfully")
    
      setval((val)=> !val)
      setDescription("")
      setTitle("")
      setfirst("")
      console.log(val)

    
   
   
  };




  useEffect(() => {
    fetch('https://backend-savnote-ocpl.vercel.app/note/allNotes')
      .then(response => response.json())
      .then(Data => setNotes(Data.data))
      .catch(error => console.error(error));
  }, [val]);
  console.log(notes , "this is all note")

  return (
    <>
     <NAVBAR3/>
     
     <ToastContainer/>
    <motion.div  initial = {{x:'-100vw'}} animate = {{x :0}} transition={{delay : 0.4}} className="container">
      <div>
      <Link to = "/">
      <motion.button  style  = {{width : "10rem" , margin : '3rem 0' }}  initial = {{x:'-100vw'}} animate = {{x :0}} transition={{delay : 0.4}} whileHover={{scale : 1.3}}  type="submit" className="btn btn-primary">
        
        REGISTER HERE
       
    
    </motion.button>
    </Link>
      </div>
   
    <motion.h1 initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{delay : 1.5 , duration : 3}}>ADD NOTES</motion.h1>
  <form onSubmit={handleSaveNote} >

  <div className="form-group">
      <motion.label  whileHover={{scale : 1.1}} htmlFor="title">Name</motion.label>
      <motion.input  whileHover={{scale : 1.1}}
        type="text"
        className="form-control"
        id="name"
        value={firstName}
        onChange={handleFirstChange}
      />
    </div>
    
    <div className="form-group">
      <motion.label whileHover={{scale : 1.1}} htmlFor="title">Title</motion.label>
      <motion.input whileHover={{scale : 1.1}} 
        type="text"
        className="form-control"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />
    </div>

  

    <div className="form-group">
      <motion.label whileHover={{scale : 1.1}} htmlFor="content">Content</motion.label>
      <motion.textarea whileHover={{scale : 1.1}} 
        className="form-control"
        id="content"
        rows="3"
        value={Description}
        onChange={handleContentChange}
      ></motion.textarea>
    </div>
    <motion.button whileHover={{scale : 1.3}} style={{marginTop : "20px"}} type="submit" className="btn btn-primary">
      Save Note
    </motion.button>
  </form>
  <div className="allNotes">
  <ListGroup className="notes-list">
    {notes.map(note => (
        <motion.div whileHover={{scale : 1.1}} key = {note._id} >
        <ListGroup.Item key={note.id}>
        <SingleCard _id = {note._id} title={note.title} firstName={note.firstName} Description = {note.Description} notes = {notes} setNotes  = {setNotes}  setval = {setval} />
      </ListGroup.Item>
        </motion.div>
    
    ))}
  </ListGroup>
</div>

  

</motion.div>
    </>
   
    
  );
};

export default SaveNote;