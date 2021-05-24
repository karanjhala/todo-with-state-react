import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Starter", completed: true },
  { id: "todo-1", name: "Demo", completed: false },
  { id: "todo-2", name: "Tasks", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
