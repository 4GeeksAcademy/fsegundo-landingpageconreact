import React from "react";
import { Card } from "../Card";
import { Navbar } from "../Navbar";
import { Jumbotron } from "../Jumbotron";

//include images into your bundle

const stockcards = [{
	title: 'El mono ambulante',
	description: 'Representativo para las epocas antiguas',
	button: 'Press here',
	photo: 'https://preview.redd.it/bold-and-vibrant-tattoo-work-by-argentinian-artist-alejo-v0-ld4429whvvle1.jpg?width=640&crop=smart&auto=webp&s=54dc128b74b762406a09d65d31b83a62c163586b'

},
{
	title: 'El mono de la realeza',
	description: 'Uno de los monos mas cultos en la actualidad',
	button: 'Press here',
	photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YUNRKtJQqAlzqB8ExdS4US5f3OYAbn9_UQ&s'

},
{
	title: 'El mono trapero',
	description: 'Reluciendo sus dientes de oro y su flow unico',
	button: 'Press here',
	photo: 'https://preview.redd.it/bold-and-vibrant-tattoo-work-by-argentinian-artist-alejo-v0-3k0i09whvvle1.jpg?width=640&crop=smart&auto=webp&s=d5b3af44838d9a585f498ca7e975cf4dbb1a5635'
},
{
	title: 'El mono de las mil mujeres',
	description: 'Atuendo acorde a las marcas de su rostro',
	button: 'Press here',
	photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1wt-d4Wz9zqwfilga_f0LlQqrPpCfmocMQ&s'

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
						<Card key={id} title = {element.title} description = {element.description} button = {element.button} photo={element.photo} />
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