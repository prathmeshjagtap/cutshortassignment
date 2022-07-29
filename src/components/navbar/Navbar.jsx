import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {
	return (
		<nav>
			<img src={logo} alt="website__logo" />
			<h1 className="website__name">Eden</h1>
		</nav>
	);
}

export { Navbar };
