import React from "react";
import { Card } from "../Card";
import { Navbar } from "../Navbar";
import { Jumbotron } from "../Jumbotron";

//include images into your bundle

const stockcards = [{
	title: 'Panter',
	description: 'The best in the jungle',
	button: 'Press here'

},
{
	title: 'Lion',
	description: 'The king of the jungle',
	button: 'Press here'

},
{
	title: 'Marcian',
	description: 'The last one in the earth',
	button: 'Press here'

},
{
	title: 'Monkey',
	description: 'Spicy boy',
	button: 'Press here'

}

]

//create your first component
const Home = () => {
	return (
		<>

			<Navbar />
			<Jumbotron />
			{
				stockcards.map((element, id) => {
					return (
						<Card key={id} />
					)
				})
			}
			<footer className="bg-light text-center text-lg-start mt-auto">
				<div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
					© 2025 by <strong>Alejo Gmz</strong>
				</div>
			</footer>

		</>

	);
};

export default Home;