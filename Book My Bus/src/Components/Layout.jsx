import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'
import { useState } from 'react';
export default function Layout(){
  let [user,setUser] = useState(null);
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

