// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react';

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(event) {
    const {value} = event.target;
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          id="username"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
