// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react';
import '../box-styles.css';

function Box({size, className = '', name, style}) {
  const sizeClassName = size ? `box--${size}` : '';
  const fontStyle = 'italic';
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle, ...style}}
    >
      {name}
    </div>
  );
}

function App() {
  return (
    <div>
      <Box
        size="small"
        style={{backgroundColor: 'lightblue'}}
        name="small lightblue box"
      />
      <Box
        size="medium"
        style={{backgroundColor: 'pink'}}
        name="medium pink box"
      />
      <Box
        size="large"
        style={{backgroundColor: 'orange'}}
        name="large orange box"
      />
    </div>
  );
}

export default App;
