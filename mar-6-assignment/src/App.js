import './App.css';
import MyRoutes from './components/includes/MyRoutes';
import Navigate from './components/includes/Navigate';
import Auth from './Context';
import HelperFunctions from './components/hooks/HelperFunctions';
import AuthFunc from './components/hooks/AuthFunc';

function App() {
  const [task ,handleTask, list , submitList , updTask , submitUpdTask , handleUpdate , handleRemove ] = HelperFunctions();
  const [ autho , submitAuth  , email , handleEmail , password ,handlePassword , userName , handleUserName , handleConfirm] = AuthFunc(); 
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
            handleRemove }}>
      <Navigate />
      <MyRoutes />
    </Auth.Provider>
    </div>
  );
}

export default App;
