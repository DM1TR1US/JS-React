import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import StructureDialog from './components/Dialogs/StructureDialog';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = () => {

  return (
    <BrowserRouter>
      <div className="app_wrapper">

        <HeaderContainer />
        <div className="mainContent_Block">
          <Navbar />

          <div className="mainContent_Block__content">
            <Route path="/profile/:userId" render={() => <ProfileContainer  />}/>
            <Route path="/messages" render={() => <StructureDialog />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/logn" render={() => <Login />} />
          </div>

        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
