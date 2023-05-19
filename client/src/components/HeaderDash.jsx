import React from 'react';
import { Link, Outlet } from 'react-router-dom';



function Dash() {
  
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1> 
      <div className='contenu-dashboard'>
      
      <ul className='navbar-dashboard'>
        <li><Link to='products'>Products</Link></li>
        <li><Link to='clients'> Clients</Link></li>
        <li><Link to='orders'>Orders</Link></li>
      </ul>    
      
      
      <Outlet />
      </div>
    </div>
  );
}

export default Dash;