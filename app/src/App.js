import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import AdminPresent from './pages/admin/AdminPresent';
import AdminSettings from './pages/admin/AdminSettings';
import ClientView from './pages/client/ClientView';
import ClientLogin from './pages/client/ClientLogin';
import CreateEvent from './pages/registration/CreateEvent';
// import UpdateSpeaker from './pages/registration/UpdateSpeaker';


// testing apps
//import Notification from './components/Notification';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Routes>
              <Route path="/" exact element={<ClientLogin/>} />
              <Route path="/adminpresent/:id" exact element={<AdminPresent/>}/>
              <Route path="/adminsettings/:id" exact element={<AdminSettings/>}/>
              <Route path="/clientview/:id" exact element={<ClientView/>}/>
              <Route path="/clientlogin" exact element={<ClientLogin/>}/>
              <Route path='/createevent' exact element={<CreateEvent/>} />

           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;