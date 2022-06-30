import React from 'react';
import { useLocation } from 'react-router-dom';

const ToDo = () => {
    const location= useLocation([]);
    console.log(location.state);
    return (
        <div>
            <h2>Add to-do list</h2>
            
            <h3>My to-do: {location.state}</h3>
        </div>
    );
};

export default ToDo;