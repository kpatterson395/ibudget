import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<h1><Link className="header" to={'/'}>iBudget</Link></h1>
	)
}

export default Header;