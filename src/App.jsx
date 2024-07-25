import './App.css'
import React, { useContext } from 'react';
//components
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
//pages
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Forgot from './pages/forgot/Forgot'; 
import Reset from './pages/reset/Reset';
import LoggedOut from './pages/loggedout/LoggedOut';
import Roadmap from './pages/Roadmap/Roadmap';
import Tasks from './pages/Task/Tasks';
import ConfirmUser from './pages/confirmuser/ConfirmUser';
import DataContext from './context/DataContext';
import Profile from './components/profile/Profile';
import { ToastContainer } from 'react-toastify';



function App() {
  const { loggedUser } = useContext(DataContext);

  return (
    <>
      <ToastContainer/>
      {
        loggedUser  &&  !loggedUser.isMentor &&
        <>
          <Header />
          <Navbar />
        

        </>
      }



      {/* without login student routes */}
      <Routes>
        {
          !loggedUser &&
          
          <>
            
            <Route path='/' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset/:id' element={<Reset />} />
            <Route path='/confirm/:id' element={<ConfirmUser />} />
            <Route path='/*' element={<LoggedOut />} />

          </>
        }

        {
         loggedUser && 
           <>
              <Route path='/' element={<Roadmap />} />
              <Route path='/class' element={<Roadmap />} />
              <Route path='/task' element={<Tasks />} />
              <Route path='/profile' element={<Profile />} />
          </>
        }
      </Routes>
    </>
  )
}

export default App
