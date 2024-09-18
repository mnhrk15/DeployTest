import React from 'react';

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          marginLeft: '8px',
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        style={{ marginLeft: '8px' }}
      >
        削除
      </button>
    </li>
  );
}

export default TaskItem;
