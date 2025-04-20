import React from "react";

export const Navbar = () => {
    return (
		<div className="container-navbar">
			<div className="row col-12 col-6 my-auto">
        <nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">Alejo GMZ</a>

				<div className="buttons-navbar">
				<li className="nav-item">
					<a className="nav-link active text-white" aria-current="page" href="#">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary" href="#">About</a>
				</li>
				<li className="nav-item">
					<a className="nav-link active text-secondary" aria-current="page" href="#">Services</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary" href="#">Contact</a>
				</li>
				</div>
			</nav>
			</div>
			</div>
    )
}