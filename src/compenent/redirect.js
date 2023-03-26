import React from 'react';
import { Redirect } from 'react-router-dom';

export default function MyComponent() {
  const isLoggedIn = true; 

  return isLoggedIn ? (
    <Redirect to="/commonpage"/>
  ) : (
    <div></div>
  );
}
