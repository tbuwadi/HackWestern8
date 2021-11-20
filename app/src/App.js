import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import AdminPresent from './pages/admin/AdminPresent';
import AdminSettings from './pages/admin/AdminSettings';
import ClientView from './pages/client/ClientView';
import ClientLogin from './pages/client/ClientLogin';

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
           </Routes>

           <Notification text="join the zoom meeting right now and now and naow andsjfs "/>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;