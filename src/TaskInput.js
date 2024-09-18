import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="新しいタスクを入力"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TaskInput;
