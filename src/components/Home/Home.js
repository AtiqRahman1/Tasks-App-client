import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate= useNavigate()
   const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)
        navigate('/todo',{state: event.target[0].value });
      }
    return (
        <div>
            <h1>Your Daily Task</h1>
            <form onSubmit={handleSubmit}>     
      <input type="text" placeholder="Type here" class="input input-bordered w-80 max-w-xs" /> 
       <br />
      
       <input type="submit" className='btn btn-active btn-ghost mt-3' value="Add" />
      
       
      </form>

        </div>
    );
};

export default Home;