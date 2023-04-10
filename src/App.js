import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Nopage } from './Components/Nopage';
import Usercomponents from './Components/Usercomponents';
import {data} from './Data/studentData';
import { Addstudent } from './Components/Addstudent';
import { EditStudent } from './Components/EditStudent';
import { UserDetails } from './Components/studentDetails';
import { Teacher_data } from './Data/teacherdata';
import { EditTeacher } from './Components/EditTeacher';
import TeacherComponents from './Components/TeacherComponents';
import { TeacherDetails } from './Components/TeacherDetails';
import { Addteacher } from './Components/Addteacher';



function App() {
  const [user, setUser] = useState(data)
  const [teacher, setTeacher] = useState(Teacher_data)  
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
        <Usercomponents
        user={user}
        setUser={setUser}
        /> 
        </Route>

        <Route path="/teacherdetails">
        <TeacherComponents
        teacher={teacher}
        setTeacher={setTeacher}
        />
        </Route>

        <Route path="/adduser">
         <Addstudent
          user={user}
          setUser={setUser}
         />
        </Route>

        <Route path="/addteacher">
          <Addteacher
          teacher={teacher}
          setTeacher={setTeacher}
          />
        </Route>

        <Route path="/edit/:id">
          <EditStudent
          user={user}
          setUser={setUser}
          />
        </Route>

        <Route path="/edited/:id">
        <EditTeacher
        teacher={teacher}
        setTeacher={setTeacher}
        />
        </Route>
        
        <Route path="/teacher/:id">
          <TeacherDetails teacher={teacher}/>
        </Route>

        <Route path="/user/:id">
          <UserDetails user={user}/>
        </Route>

        <Route path="**">
          <Nopage/>
        </Route>

      </Switch>
            
    </div>
  );
}

export default App;
