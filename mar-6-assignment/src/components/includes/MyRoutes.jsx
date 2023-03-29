import React from 'react';
import { useContext } from 'react';
import { Routes , Route , Navigate } from 'react-router-dom';
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Settings from './../pages/Settings';
import SignIn from '../pages/SignIn';
import Error from '../pages/Error';
import Auth from '../../Context';


const MyRoutes = () => {
  const x = useContext(Auth);
  // console.log(x);
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Home list={x.list} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/setting" element={!x.logIn ? <Error /> : <Settings />} />
            <Route exact path="/signin-signup" element={!x.logIn ? <SignIn auth={x.autho} /> : <Navigate exact to="/" />} /> 
            <Route path='*' element={<Error />} />
        </Routes>
    </div>
  )
}

export default MyRoutes