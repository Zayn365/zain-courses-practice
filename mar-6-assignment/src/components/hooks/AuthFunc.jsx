import { useState } from "react";


function AuthFunc() {
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [userName , setUserName] = useState('');
const [autho , setAutho] = useState([{username: 'zain',email: 'zain@gmail.com' , password: '123456'}]);

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
        setAutho([{username: userName, email: email , password: password}, ...autho]);
        setEmail('');
        setPassword('');
        setUserName('');
     }
// const spreadAuth = [...autho];
// console.log(...spreadAuth);  
function handleConfirm(){
        const emailFilter = autho.find(val => val.email === email);
        const passFilter = autho.find(val => val.password === password )
        if(emailFilter === passFilter){
                alert("Correct");
        }
        else {
                alert("InCorrect")
        }
}     
return [ autho , submitAuth  , email , handleEmail , password ,handlePassword , userName , handleUserName , handleConfirm];          
}


export default AuthFunc