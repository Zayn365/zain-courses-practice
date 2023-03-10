import React from 'react';
import { useContext } from 'react';
import Auth from '../../Context';

const SignIn = () => {
  const x = useContext(Auth)
  // console.log(x.handleLogIn);
  // console.log(x.handleEmail);
  return (
    <div className='SignUpForm'>
        <h1>Please Signup To SignIn</h1>
        <br />
        <form onSubmit={(e) => {
          e.preventDefault();
          x.handleLogIn();
          // x.submitAuth();
          x.handleConfirm();
        }}>
            <label>Username</label>
            <input required={true} type="text" value={x.userName} onChange={(e) => x.handleUserName(e)} placeholder='Lorem' />
            <br />
            <label>Email</label>
            <input required={true} type="text" value={x.email} onChange={(e) => x.handleEmail(e)} placeholder='loremipusm@lorem.com' />
            <br />
            <label>Password</label>
            <input required={true} type="password" value={x.password} onChange={(e) => x.handlePassword(e)} placeholder='************' />
            <br />
            <button type='button' onClick={() => x.submitAuth()}>ADD ME</button>
            <br />
            <button type='submit'>SignUp/SignIn</button>
        </form>
    </div>
  )
}

export default SignIn