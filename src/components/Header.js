import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
	<header id="header" className="alt">
		<span className="logo">
			<img src={logo} alt="" />
		</span>
		<p>Screen Printing</p>
	</header>
)

export default Header
