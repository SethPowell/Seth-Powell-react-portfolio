import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // Class components allow you to access higher logic tools like state and lifecycle hooks
    // Classes are used for anything that needs to be more dynamic such as communicating with api's
    // Constructor is a key word that can only be used in functions
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
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

    getPortfolioItems() {
        axios
          .get('https://sethpowell.devcamp.space/portfolio/portfolio_items')
          .then(response => {
            console.log("response data",response);
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
            console.log(error);
          })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug}/>
        })
    }

    componentDidMount() {
        this.getPortfolioItems();

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