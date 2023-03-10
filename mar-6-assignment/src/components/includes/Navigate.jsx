import React from 'react'
import { useContext } from 'react'
import { Link , Outlet } from 'react-router-dom'
import Auth from '../../Context'

const Navigate = () => {
  const x = useContext(Auth)
  // console.log(...x.autho);
  return (
    <div className='Navigate'>
       <img src='assets/img/logo.png' width="160px"  alt="logo" /> 
       <ul> 
          <li><Link exact to="/">Home</Link></li>
          <li><Link exact to="/about">About</Link></li>
          <li><Link exact to="/contact">Contact</Link></li>
          {x.logIn ?
          <li><Link exact to="/setting">Setting</Link></li>
          : null}
          {!x.logIn ?
          <li><Link exact to="/signin-signup">Signup/Signin</Link></li>
           : 
          <li><Link exact to="/"><span>{x.userName.toUpperCase()}</span> | <span style={{color: 'lightgreen'}} onClick={() => x.handleLogIn()}>LogOut</span></Link></li>
          }
       </ul>
       <Outlet />
    </div>
  )
}

export default Navigate