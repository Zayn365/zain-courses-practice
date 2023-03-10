import React from 'react';
import ListHome from '../includes/ListHome';

const Home = props => {
  const quotes = ["Be yourself. Everyone else is already taken." , "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe" , "So many books, so little time.”"]
  return (
    <div>
        <h1>Quotes Of The Day</h1>
        <div className='list-main'> 
          <h2><ListHome list={props.list} /></h2>
        </div>
        <div className='list-main'> 
          <h2 style={{position: 'relative' , bottom: '10vh'}}>{quotes.map((val,key) => {
            return <>
             <ul key={key} >
                <li key={key}>{val}</li>
                <br />
             </ul>
            </>
        })}</h2>
        </div>
    </div>
  )
}

export default Home