// TodoItem.js

import React from 'react';

function TodoItem({ task, index, removeTask }) {
  return (
    <li>
      {task}
      <button onClick={() => removeTask(index)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;