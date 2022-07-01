import "./todo.css";
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ToDo = () => {
    const location= useLocation([]);
    const navigate = useNavigate()
    const [checked, setChecked] = useState([]);
    const completeList = [location.state];
   
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const completedItems = checked.length ? checked.reduce((total, item) => {
    navigate('/completedtasks')
        return total + ", " + item;   
      })
    : "";
  
  let isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
    
  
    
    return (
         <div className='card-body items-center text-center'>
           <div>
        <div className="title text-bold">Your Task:</div>
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