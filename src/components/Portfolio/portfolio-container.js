import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // Class components allow you to access higher logic tools like state and lifecycle hooks
    // Classes are used for anything that needs to be more dynamic such as communicating with api's
    // Constructor is a key word that can only be used in functions
    constructor() {
        super();
        // super must be called in constructors
        console.log("Portfolio container has rendered")
    }

    portfolioItems() {
        const data = ["Google","Facebook","Apple"];

        return data.map(item => {
            return <PortfolioItem title={item} url={"google.com"}/>
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here ...</h2>

                {this.portfolioItems()}
            </div>
        );
    }
}