import React, { useState } from 'react';
import "./style.css";
import img from '../Images/propic.jpeg';


function Task() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filterOptions, setFilterOptions] = useState(['all', 'today', 'tomorrow']);

  const addTask = () => {
    const taskText = inputValue;
    const strSplit = taskText.split('@');
    const tagName = strSplit[1];

    if (taskText) {
      const newTasks = [...tasks, { text: taskText, tag: tagName }];
      setTasks(newTasks);
      setInputValue('');

      if (!filterOptions.includes(tagName) && tagName) {
        setFilterOptions([...filterOptions, tagName]);
      }
    }
  };



  const filterTask = (event) => {
    setFilter(event.target.value);
  };



  

  const renderTask = () => {
    return tasks.map((taskItem, index) => {
      if (filter === 'all' || taskItem.tag === filter) {
        return <li key={index}>{taskItem.text}</li>;
      }
      return null;
    });
  };

  
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <ul id="new">
            <li id="new1">
              <a href="#">Home</a>
            </li>
            <li id="new1">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="online">
            <img src={img} className="nav-profile-img" alt="Profile" />
          </div>
        </div>
      </nav>
      <div className="main">
        <div className="main1">
          <h2>Task List</h2>
          <div className="row">

            <input
              type="text"
              id="input-box"
              placeholder="Tasks"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button id="forButton" onClick={addTask}>
              Add
            </button>

            <select id="tagfilter" onChange={filterTask} value={filter}>
              
              {filterOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}

            </select>


          </div>
          <ul id="list-container">{renderTask()}</ul>
        </div>
      </div>
    </>
  );
}

export default Task;






