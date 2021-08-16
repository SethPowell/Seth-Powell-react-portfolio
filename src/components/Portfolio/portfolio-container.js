import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // Class components allow you to access higher logic tools like state and lifecycle hooks
    // Classes are used for anything that needs to be more dynamic such as communicating with api's
    // Constructor is a key word that can only be used in functions
    constructor() {
        super();
        // super must be called in constructors

        // state is essentially just a container for your variables that will change all variable instances dynamically
        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Google"},
                {title: "Facebook"},
                {title: "Apple"}
            ]
        }

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"}/>
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle:"The title has changed"
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate} >Change Title</button>
            </div>
        );
    }
}