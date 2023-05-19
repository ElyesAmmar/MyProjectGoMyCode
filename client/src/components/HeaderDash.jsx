import React from 'react';
import { Link, Outlet } from 'react-router-dom';



function Dash() {
  
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1> 
    <div>
      
      <ul className='navbar-dashboard'>
        <li><Link to='products'>Products</Link></li>
        <li><Link to='clients'> Clients</Link></li>
        <li><Link to='currentOrder'>CurrentOrder</Link></li>
        <li><Link to=''>Orders</Link></li>
      </ul>    
    
    </div>
    <Outlet />
    </div>
  );
}

export default Dash;