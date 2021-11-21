import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import AdminPresent from './pages/admin/AdminPresent';
import AdminSettings from './pages/admin/AdminSettings';
import ClientView from './pages/client/ClientView';
import ClientLogin from './pages/client/ClientLogin';
import CreateEvent from './pages/registration/CreateEvent';
import UpdateSpeaker from './pages/registration/UpdateSpeaker';


// testing apps
import Notification from './components/Notification';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Routes>
              <Route path="/" element={<AdminPresent/>} exact/>
              <Route path="/adminpresent" element={<AdminPresent/>}/>
              <Route path="/adminsettings" element={<AdminSettings/>}/>
              <Route path="/clientview" element={<ClientView/>}/>
              <Route path="/clientlogin" element={<ClientLogin/>}/>
              <Route path='/createevent' element={<CreateEvent/>} />
              <Route path='CreateSpeaker' element={<UpdateSpeaker/>} />
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;