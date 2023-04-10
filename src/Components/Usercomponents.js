import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";


export default function Usercomponents({user, setUser}){
    // const [user, setUser] = useState(data)
    const history = useHistory();

    // functionality
    const deleteUser = (idx)=>{
        const Alter_list = user.filter((per)=>per.id !== idx);
        setUser(Alter_list);
    }

    return(
        <BaseApp
        title="Students Details">
            <div className="user-content">
                {/* <AddUser user={user} setUser={SetUser}/> */}
                    {user.map((person, idx)=>(
                        <div key={idx} className="user-card">
                            <h1>{person.name}</h1>
                            <p>Batch : {person.batch}</p>
                            <p>Email : {person.email}</p>
                            <p>Exp : {person.Exp}</p>

                            <div className="btn-group">
                                <button className="btn edit-btn" onClick={()=>history.push(`/edit/${person.id}`)}>Edit</button>
                                <button className="btn view-btn" onClick={()=>history.push(`/user/${idx}`)}>view</button>
                                <button className="btn delete-btn" onClick={()=>deleteUser(person.id)}>Delete</button>

                            </div>

                        </div>

                ))}
            </div>
        </BaseApp>
    )
}