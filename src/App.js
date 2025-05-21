import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Tracker</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>
            <span
              onClick={() => toggleTask(idx)}
              style={{ textDecoration: task.done ? "line-through" : "none" }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(idx)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
