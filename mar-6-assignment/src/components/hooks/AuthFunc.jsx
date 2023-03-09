import { useState } from "react";


function AuthFunc() {
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [userName , setUserName] = useState('');
const [logIn , setLogIn] = useState(true);
const [autho , setAutho] = useState({username: 'zain',email: 'zain@gmail.com' , password: '123456'});

function handleEmail(e) {
        setEmail(e.target.value);
     }
function handlePassword(e) {
        setPassword(e.target.value);
     }
function handleUserName (e) {
        setUserName(e.target.value);
}     
function submitAuth() {
        setAutho({username: userName, email: email , password: password});
     }
function handleLogIn () {
        setLogIn(!logIn);
}     
function handleConfirm(){
        if(email === autho.email && password === autho.password){
                alert("Correct");
        }
        else {
                alert("InCorrect")
        }
}     
return [ autho , submitAuth  , email , handleEmail , password ,handlePassword , userName , handleUserName , handleConfirm, logIn , handleLogIn];          
}


export default AuthFunc