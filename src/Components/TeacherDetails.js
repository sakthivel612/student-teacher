import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";



export function TeacherDetails({teacher}){
    const {id} = useParams();
    const person = teacher[id];
    return (
        <BaseApp
        title={"Single teacher details"}
        >
            <div className="user-content">
                <div className="user-card">
                        <h1>{person.name}</h1>
                        <p>batch : {person.batch}</p>
                        <p>email : {person.email}</p>
                        <p>Exp : {person.Exp}</p>
                </div>
            </div>
        </BaseApp>
    )
}