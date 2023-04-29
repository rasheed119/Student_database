import React , { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Updatestdents({student,setstudent, index}){
  const editstudent = student[index]
  const [name, setname] = useState("");
  const [batch, setbatch] = useState("");
  const [qualification, setqualification] = useState("");
  const [gender, setgender] = useState("");

/*   useEffect(()=>{
    setname(editstudent.name);
  },[editstudent]) */

  const updatestudent = () => {
    const updatedstudent = {
      name,qualification,batch,gender
    };
    student[index] = updatedstudent;
    setstudent([...student]);
  }

  return(
    <div className="Addstudents" >

    <input
    placeholder="Enter Name"
    type="text"
    value = {name}
    onChange = {(e)=>setname(e.target.value)}
    />

    <input
    placeholder="Enter Batch"
    type="text"
    value = {batch}
    onChange = {(e)=>setbatch(e.target.value)}
    />

    <input
    placeholder="Enter Qualification"
    type="text"
    value = {qualification}
    onChange = {(e)=>setqualification(e.target.value)}
    />

    <input
    placeholder="Enter Gender"
    type="text"
    value = {gender}
    onChange = {(e)=>setgender(e.target.value)}
    />

    <div>
    <Button variant="primary"
    onClick = {updatestudent}
    >Update Student</Button>
    </div>

  </div>  
  )
}