import React from 'react';
import './style.css';
import User from './User';

export default function App() {
  function getData() {
    alert('Hello from app');
  }
  return (
    <div>
      <h1>Pass function as Props</h1>
      <User data={getData} />
    </div>
  );
}
