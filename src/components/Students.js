import React from 'react';
import Base from '../base/base.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import data from "../data/data.js"
import { useState } from "react";
import Addstudents from "./Addstudents.js"

function Students() {
  const [student, setstudent] = useState(data);

  const deletestudent = (idx)=>{
    const remaining_data = student.filter((studobj,index)=> index !==idx);
    setstudent(remaining_data);
  }

  return (
    <div>
      <Base
        Title={'Students Dashboard'}
        Description={'This page contains all students data'}
      >

        <div className="container">
          <Addstudents
          student = {student}
          setstudent = {setstudent}
          />
          <div className="card-container">

          {student.map((stud, idx)=>(
            <Card style={{ width: '18rem' }} key={idx}>
              <Card.Body>
                <Card.Text>
                  Name :{stud.name}
                </Card.Text>
                <Card.Text>
                  Batch :{stud.batch}
                </Card.Text>                <Card.Text>
                  Qualification :{stud.qualification}
                </Card.Text>                <Card.Text>
                  Gender :{stud.gender}
                </Card.Text>
                <Button variant="primary">Edit</Button>
                <Button variant="danger"
                onClick = {()=>deletestudent(idx)}
                >Delete</Button>
              </Card.Body>
            </Card>

          ))}
          </div>
        </div>
      </Base>
    </div>
  );
}
export default Students;
