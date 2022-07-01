import "./todo.css";
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ToDo = () => {
    const location= useLocation([]);
    console.log(location.state);
    const [checked, setChecked] = useState([]);
    const completeList = [location.state];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const completedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

   
    
    return (
         <div className='card-body items-center text-center'>
            <h2 className='text-3xl text-bold'> To-Do list</h2>
            
           <div>
        <div className="title">Your Task:</div>
        <div>
          {completeList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {`Completed task: ${completedItems}`}
      </div>
        </div>
    );
};

export default ToDo;