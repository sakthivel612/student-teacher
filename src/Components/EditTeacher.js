import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";


export const EditTeacher = ({teacher, setTeacher}) =>{
    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [Exp, setExp] = useState();
    const [batch, setBatch] = useState("");

const {id} = useParams();
const selectedTeacher = teacher.find((per)=>per.id === id);

const history = useHistory();

useEffect(()=>{
    setIdx(selectedTeacher.id)
    setName(selectedTeacher.name)
    setEmail(selectedTeacher.email)
    setBatch(selectedTeacher.batch)
    setExp(selectedTeacher.Exp)
}, []);


const updatedTeacher = ()=>{
    const editIndex = teacher.findIndex(per => per.id === id)
    const editedData = {
        id : idx,
        name,
        email,
        batch,
        Exp
    }
    teacher[editIndex] = editedData
    setTeacher([...teacher]);
    history.push("/teacherdetails");
}

    return(
        <BaseApp title={"Edit the teacher Details"}>
        <div>
            <input
            placeholder="id"
            value={idx}
            type="text"
            onChange={(event)=>setIdx(event.target.value)}
            />

            <input
            placeholder="name"
            value={name}
            type="text"
            onChange={(event)=>setName(event.target.value)}
            />
            
            <input
            placeholder="email"
            value={email}
            type="text"
            onChange={(event)=>setEmail(event.target.value)}
            />

            <input
            placeholder="batch"
            value={batch}
            type="text"
            onChange={(event)=>setBatch(event.target.value)}
            />

            <input
            placeholder="Exp"
            value={Exp}
            type="number"
            onChange={(event)=>setExp(event.target.value)}
            />
        </div>
        <div>
        <button 
            className="edituser-btn"
            onClick={updatedTeacher}
            >Edit</button>
        </div>
    </BaseApp>
    )
}
