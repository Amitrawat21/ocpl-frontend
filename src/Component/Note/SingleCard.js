import React from 'react';
import {motion} from "framer-motion"
import { Card, ListGroup } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md'
import axios from "axios"
import "./Note.css"

const SingleCard = ({ title, firstName , Description  , _id , setval  }) => {
  const handleDelete = async (_id)=>{
    
    await axios.delete(`https://backend-savnote-ocpl.vercel.app/note/delete/${_id}`)
    setval((val)=>!val)

  }
 


return(
  
  <Card >
    <Card.Body>
    <Card.Text>NAME : {firstName}</Card.Text>
      <Card.Title>TITLE :{title}</Card.Title>
      <Card.Text> DESCRIPTION :{Description}</Card.Text>
    </Card.Body>
    <div onClick={()=>handleDelete(_id)}>
      <MdDeleteForever style={{marginRight : "5px" , width : "30px" , height : "60px"} } />
    </div>
    
  
  </Card>

 

)
}

export default SingleCard;