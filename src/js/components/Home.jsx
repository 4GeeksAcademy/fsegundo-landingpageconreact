import React from "react";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
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
			<div className="container">
				<div className="jumbotron bg-light">
					<h1 className="display-4">Bienvenidos, fanaticos de los tattoos!</h1>
					<p className="lead">A continuación, podran ver algunos de los trabajos realizados por el artista <strong>Alejo GMZ</strong>, o mas conocido como <strong>THE KING OF THE TRADITIONAL TATTOO</strong></p>
					<p className="lead">
						<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
					</p>
				</div>
				<div className="card" style={{width: '18rem'}}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
		</>

	);
};

export default Home;