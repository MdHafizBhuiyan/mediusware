import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { name, status }]);
    setName('');
  };

  const filterTasks = () => {
    if (status === 'All') {
      return tasks.sort((a, b) => {
        if (a.status === 'Active') return -1;
        if (a.status === 'Completed' && b.status !== 'Active') return -1;
        return 1;
      });
    } else {
      return tasks.filter(task => task.status === status);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="All">All</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filterTasks().map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
