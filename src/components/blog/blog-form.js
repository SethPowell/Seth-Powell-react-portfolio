import React, { Component } from "react";

export default class BlogForm extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<form>
				<input type="text" />
				<input type="text" />

				<button type="submit">Save</button>
			</form>
		);
	}
}
