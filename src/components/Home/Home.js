import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToDo from './ToDo';

const Home = () => {
    const navigate= useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)
        const info= {
            title:event.target[0].value
        }

        fetch('https://true-marks-29521.herokuapp.com/info',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data => console.log(data));

        navigate('/',{state: event.target[0].value });
      }
    return (
       <div >
         <div className='card-body items-center text-center'>
            <h1>Your Daily Task</h1>
    <form onSubmit={handleSubmit}>     
      <input type="text" placeholder="Type here" className="input input-bordered w-80 max-w-xs" /> 
       <br />
       <input type="submit" className='btn btn-active btn-ghost mt-3' value="Add" />
    </form>
        </div>
        <ToDo></ToDo>
       </div>
    );
};

export default Home;