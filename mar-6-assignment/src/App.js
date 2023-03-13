import './App.css';
import MyRoutes from './components/includes/MyRoutes';
import Navigate from './components/includes/Navigate';
import Auth from './Context';
import HelperFunctions from './components/hooks/HelperFunctions';
import AuthFunc from './components/hooks/AuthFunc';
import Toggle from './components/hooks/Toggle';

function App() {
  const [task ,handleTask, list , submitList , updTask , submitUpdTask , handleUpdate , handleRemove, idStore , handleIdStore ] = HelperFunctions();
  const [ autho , submitAuth  , email , handleEmail , password ,handlePassword , userName , handleUserName , handleConfirm] = AuthFunc(); 
  const [logIn , handleLogIn , toggleUpd , handletoggleUpd] = Toggle();

  return (
    <div className="App">
    <Auth.Provider 
    value={{autho,
            submitAuth, 
            list,
            submitList, 
            email, 
            handleEmail, 
            password,
            userName, 
            handleUserName,
            handlePassword, 
            handleConfirm,
            task,
            handleTask , 
            updTask , 
            submitUpdTask , 
            handleUpdate , 
            handleRemove ,
            logIn , 
            handleLogIn , 
            toggleUpd , 
            handletoggleUpd,
          //  eslint-disable-next-line
            logIn,
          //  eslint-disable-next-line
            handleLogIn , 
          //  eslint-disable-next-line
            toggleUpd , 
          //  eslint-disable-next-line
            handletoggleUpd, 
            idStore , 
            handleIdStore}}>
      <Navigate />
      <MyRoutes />
    </Auth.Provider>
    </div>
  );
}

export default App;
