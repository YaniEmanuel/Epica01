// TodoList.js

import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} index={index} task={task} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;