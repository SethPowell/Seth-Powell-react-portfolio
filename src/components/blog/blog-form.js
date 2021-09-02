import React, { Component } from "react";
import axios from "axios";

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

	buildForm() {
		let formData = new FormData();

		formData.append("portfolio_blog[title]", this.state.title);
		formData.append("portfolio_blog[blog_status]", this.state.blog_status);

		return formData;
	}

	handleSubmit(event) {
		axios
			.post(
				"https://sethpowell.devcamp.space/portfolio/portfolio_blogs",
				this.buildForm(),
				{ withCredentials: true }
			)
			.then((response) => {
				this.props.handleSuccessfulFormSubmission(
					response.data.portfolio_blog
				);

				this.setState({
					title: "",
					blog_status: "",
				});
			})
			.catch((error) => {
				console.log("error in handle submit: ", error);
			});

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
