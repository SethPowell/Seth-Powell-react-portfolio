import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.getPortfolioItem();
	}

	getPortfolioItem() {
		axios
			.get(
				`https://sethpowell.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
				{ withCredentials: true }
			)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log("getPortfolioItem error: ", error);
			});
	}

	render() {
		return (
			<div className="">
				<h2>Portfolio Detail for {this.props.match.params.slug}</h2>
			</div>
		);
	}
}
