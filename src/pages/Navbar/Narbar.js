import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Clock from '../Clock/Clock';
import './Navbar.css';

function Navbar() {
	return (
		<div>
			<div className='Navbar'>
				<div className='menu'>
					<nav className='Painel'>
						<Link className='navigation' to='/'>Home</Link>
						<Link className='navigation' to='/user-list'>Users</Link>
					</nav>
					<Clock />
				</div>
				<Outlet />
			</div>
		</div>
	)
}

export default Navbar;