import React, {Component} from "react";
import JokeComponents from "./JokeComponents";

class Jokes extends Component {
	state = {
		joke: []
	};

	getJokes = async () => {
		let response = await fetch("https://api.chucknorris.io/jokes/random");
		return response.json();
	};

	generateJoke = async () => {
		let data = await this.getJokes();
		let jokeText = data.value;
		this.setState(prev => {
			let joke = [...prev.joke];
			joke.push(jokeText);
			return {joke};
		});
	};

	render() {
		return (
			<section className='container'>
				<div className='card-columns jokeContainer'>
					{this.state.joke.map((joke, i) => {
						return <JokeComponents key={i} joke={joke} number={i + 1} />;
					})}
				</div>
				<div className='text-center my-5'>
					<button
						onClick={this.generateJoke}
						className='btn btn-dark text-capitalize text-center'>
						generate joke
					</button>
				</div>
			</section>
		);
	}
}

export default Jokes;
