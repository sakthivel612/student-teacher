import React from "react";
import { useHistory } from "react-router-dom";
export default function BaseApp({title, styles, children}){
    const history = useHistory();
    return (
    <div>
        <div>
            <div className="nav-styles">
                <span>
                    <button className="adduser-btn"
                    onClick={()=>history.push("/adduser")}
                    >Add Student</button>
                </span>
                <span>
                    <button className="dashboard-btn"
                    onClick={()=>history.push("/")}
                    >Student details</button>
                </span>
                <span>
                    <button className="dashboard-btn"
                    onClick={()=>history.push("/teacherdetails")}
                    >Teacher details</button>
                </span>
                <span>
                    <button className="adduser-btn"
                    onClick={()=>history.push("/addteacher")}
                    >Add Teacher</button>
                </span>
            </div>
            <div className="title">{title}</div>
        </div>
        <div className="children">{children}
            
            <footer>
                contact us
                <div>email : ***@email.com</div>
                <div>phone : 63*****75</div>
            </footer>
            
        </div>
            
    </div>
            
    )
}