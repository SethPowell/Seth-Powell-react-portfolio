import React, { Component } from "react";

export default class BlogForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			blog_status: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		this.props.handleSuccessfulFormSubmission(this.state);
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					name="title"
					placeholder="Blog Title"
					onChange={this.handleChange}
					type="text"
				/>
				<input
					placeholder="Blog Status"
					name="blog_status"
					onChange={this.handleChange}
					type="text"
				/>

				<button type="submit">Save</button>
			</form>
		);
	}
}
