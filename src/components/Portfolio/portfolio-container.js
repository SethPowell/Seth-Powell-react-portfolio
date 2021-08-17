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
            isLoading: false,
            data: [
                {title: "Google", category: "Search"},
                {title: "Facebook", category: "SocialMedia" },
                {title: "Apple", category: "ConsumerTech"},
                {title: "Samsung", category: "ConsumerTech"}
            ]
        }

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"}/>
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading Content...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("Search")} >Search Engine</button>
                <button onClick={() => this.handleFilter("SocialMedia")} >Social Media</button>
                <button onClick={() => this.handleFilter("ConsumerTech")} >Consumer Tech</button>
                {this.portfolioItems()}
            </div>
        );
    }
}