import React , { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Addstudents({student,setstudent}){
  const [name, setname] = useState("");
  const [batch, setbatch] = useState("");
  const [qualification, setqualification] = useState("");
  const [gender, setgender] = useState("");

  const createstudent = ()=>{
    const newstudent = {
      name,
      gender,
      batch,
      qualification
    }
    setstudent([...student,newstudent])
    setname("");
    setbatch("");
    setgender("");
    setqualification("");
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
      onClick = {createstudent}
      >Add Student</Button>
      </div>

    </div>   
  )
}

export default Addstudents;