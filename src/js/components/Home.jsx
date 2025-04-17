import React from "react";
import { Card } from "../Card";
import { Navbar } from "../Navbar";
import { Jumbotron } from "../Jumbotron";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
			<Card />
			
		</>

	);
};

export default Home;