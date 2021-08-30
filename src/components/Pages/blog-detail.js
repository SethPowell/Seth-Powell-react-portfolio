import React, { Component } from "react";
import axios from "axios";

export default class BlogDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentId: this.props.match.params.slug,
			blogItem: {},
		};
	}

	getBlogItem() {
		axios
			.get(
				`https://sethpowell.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
			)
			.then((response) => {
				console.log("response", response);
			})
			.catch((error) => {
				console.log("error in getBlogItem", error);
			});
	}

	componentDidMount() {
		this.getBlogItem();
	}

	render() {
		return <div className="">blog detail component</div>;
	}
}
