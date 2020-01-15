import React, {Component} from "react";

export default class JokeComponents extends Component {
	state = {
		show: false
	};

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({show: true});
		}, 100);
	};

	render() {
		return (
			<>
				<div className={`card joke m-2 ${this.state.show && "show"}`}>
					<div
						className='card-body text-center joke-card'
						data-text={this.props.number}>
						<p className='card-text'>{this.props.joke}</p>
					</div>
				</div>
			</>
		);
	}
}
