import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function Addteacher({teacher, setTeacher}){
    const history = useHistory()
    // defining states
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [Exp, setExp] = useState();
    const [batch, setBatch] = useState("");

    const addNewTeacher = ()=>{
        const newTeacher = {
            id,
            name,
            email,
            batch,
            Exp
        }
        setTeacher([...teacher, newTeacher])
        history.push("/teacherdetails")
        
    }

    return (
        <BaseApp title={"Add a New Teacher"}>
            <div>
                <input
                placeholder="id"
                value={id}
                type="text"
                onChange={(event)=>setId(event.target.value)}
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
                className="add-btn"
                onClick={addNewTeacher}
                >Add</button>
            </div>
        </BaseApp>
    )
}