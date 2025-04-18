import React from "react";

export const Navbar = () => {
    return (
		<div className="container">
			<div className="row col-12 col-6 my-auto">
        <nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">Start Bootstrap</a>

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
			</nav>
			</div>
			</div>
    )
}