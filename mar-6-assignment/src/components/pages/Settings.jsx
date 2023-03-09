import React from 'react';
import { useContext } from 'react';
import List from '../includes/List';
import Auth from '../../Context';

const Settings = () => {
  const x = useContext(Auth);
  // const[task , handleTask , list , submitList] = HelperFunctions();
  return (
    <div className='setting'>
      <h1>These Are The Settings</h1>
      <br /> 
      <form>
        <label>ADD Quote</label>
        <br />
        <input type="text" value={x.task} onChange={(e) => x.handleTask(e)} />
        <br />
        <button type='submit' onClick={(e) => { e.preventDefault(); x.submitList(e);}}>Submit</button>
        <br />
      </form>
      <br />
      <List list={x.list} />
    </div>
  )
}

export default Settings