import { useState } from "react";


function Toggle() {
 const [logIn , setLogIn] = useState(false);
 const [toggleUpd , setToggleUpd] = useState(false);
 
 function handleLogIn() {
    setLogIn(!logIn);
 }

 function handletoggleUpd() {
    setToggleUpd(!toggleUpd);
 }

 return [logIn , handleLogIn , toggleUpd , handletoggleUpd];

}


export default Toggle;