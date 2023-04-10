import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";


export default function TeacherComponents({teacher, setTeacher}){
    // const [user, setUser] = useState(data)
    const history = useHistory();

    // functionality
    const deleteTeacher = (idx)=>{
        const Alter_teacher = teacher.filter((per)=>per.id !== idx);
        setTeacher(Alter_teacher);
    }

    return(
        <BaseApp
        title="Teacher Details">
            <div className="user-content">
                {/* <AddUser user={user} setUser={SetUser}/> */}
                    {teacher.map((person, idx)=>(
                        <div key={idx} className="user-card">
                            <h1>{person.name}</h1>
                            <p>Batch : {person.batch}</p>
                            <p>Email : {person.email}</p>
                            <p>Exp : {person.Exp}</p>

                            <div className="btn-group">
                                <button className="btn edit-btn" onClick={()=>history.push(`/edited/${person.id}`)}>Edit</button>
                                <button className="btn view-btn" onClick={()=>history.push(`/teacher/${idx}`)}>view</button>
                                <button className="btn delete-btn" onClick={()=>deleteTeacher(person.id)}>Delete</button>

                            </div>

                        </div>

                ))}
            </div>
        </BaseApp>
    )
}