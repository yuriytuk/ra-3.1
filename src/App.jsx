import React from 'react';
import './App.css';
import Stars from './component/Stars';

function App() {
  const count = 4;
  return (
    
    (count >= 1 && count <= 5) ?
      <Stars count={count} />
    : null
  )
}

export default App
