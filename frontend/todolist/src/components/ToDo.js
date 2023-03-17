import React, { useState } from 'react';
import {BiEditAlt} from "react-icons/bi"; 
import {AiOutlineDelete} from "react-icons/ai"; 
import {BsCheck2Circle} from "react-icons/bs"; 
import "./todo.css"

const ToDo = ({text,updateMode,deleteMode}) => {
  const [read,setRead]= useState(false)

  const handleClick =()=>{
    setRead(current=> !current)

  }

  return (
    <div className="todo">
        <div className={`${read?"strip":""} 'text'`}>{text}</div>
        <div className='icons'>
            <BsCheck2Circle className="icon" onClick={handleClick}></BsCheck2Circle>
            <BiEditAlt className="icon"onClick={updateMode}></BiEditAlt>
            <AiOutlineDelete className="icon" onClick={deleteMode}></AiOutlineDelete>
        </div>
    </div>
  )
}

export default ToDo
