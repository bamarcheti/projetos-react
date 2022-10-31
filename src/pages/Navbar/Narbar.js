import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Relogio from '../Relogio/Relogio';
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
					<Relogio />
				</div>
				<Outlet />
			</div>
		</div>
	)
}

export default Navbar;