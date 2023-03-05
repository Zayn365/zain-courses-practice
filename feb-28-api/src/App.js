import { useEffect , useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [data , setData] = useState([]);
  const [input , setInput] = useState('');
  
  function handleInput(e) {
    setInput(e.target.value);    
  }
  function SubmitMe() {
    setData([{userId: 1 , id: 1 , title: input , completed: true} , ...data]);
    setInput('');
  }

  useEffect(()=>{
    async function loadMe () {
          const loadData = await axios.get("https://jsonplaceholder.typicode.com/todos");
          // console.log(loadData);
          const mainData = loadData.data;
          // console.log(mainData);
          setData(mainData);
    } 
    loadMe();
  },[]);

  return (
    <div>
      <center>
      <h1>MY API FETCH AND POST PROJECT</h1>
      <br />
      <form onSubmit={(e) => {
        e.preventDefault(); 
        if(input === '') 
        alert("Please ENTER A VALUE!!!"); 
        else SubmitMe(); }}>
        <label><b>Enter TODO:</b></label>
        <input value={input} onChange={(e) => handleInput(e)} />
      </form>
      <br />
      <table border="1">
             <tr>
               <th>USERID</th>
               <th>ID</th>
               <th>TITLE</th>
               <th>COMPLETED</th>
             </tr>
      {data.map((val,key) => {
         return <>
             <tr key={key}>
               <td>{val.userId}</td>
               <td>{val.id}</td>
               <td>{val.title}</td>
               <td>{val.completed ? 'true' : 'false'}</td>
             </tr>
         </>
      })}
      </table>
      </center>
    </div>
  );
}

export default App;
