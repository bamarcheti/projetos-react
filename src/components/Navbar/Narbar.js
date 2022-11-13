import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Clock from '../../components/Navbar/components/Clock/Clock';
import './Navbar.css';

function Navbar() {
	return (
		<div className='Navbar'>
			<div className='menu'>
				<nav className='Painel'>
					<Link className='navigation' to='/'>Home</Link>
					<Link className='navigation' to='/user-list'>Users</Link>
					<Link className='navigation' to="weather-forecast">Weather</Link>
				</nav>
				<Clock />
			</div>
			<Outlet />
		</div>
	)
}

export default Navbar;