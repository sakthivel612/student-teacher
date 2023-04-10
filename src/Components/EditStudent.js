import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";


export const EditStudent = ({user, setUser}) =>{
    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [Exp, setExp] = useState();
    const [batch, setBatch] = useState("");

const {id} = useParams();
const selectedUser = user.find((per)=>per.id === id);

const history = useHistory();

useEffect(()=>{
    setIdx(selectedUser.id)
    setName(selectedUser.name)
    setEmail(selectedUser.email)
    setBatch(selectedUser.batch)
    setExp(selectedUser.Exp)
}, []);


const updatedUser = ()=>{
    const editIndex = user.findIndex(per => per.id === id)
    const editedData = {
        id : idx,
        name,
        email,
        batch,
        Exp
    }
    user[editIndex] = editedData
    setUser([...user]);
    history.push("/");
}

    return(
        <BaseApp title={"Edit the student Details"}>
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
            onClick={updatedUser}
            >Edit</button>
        </div>
    </BaseApp>
    )
}
