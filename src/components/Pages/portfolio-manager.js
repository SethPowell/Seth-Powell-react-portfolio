import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItems: []
        };
    }

    getPortfolioItems() {
        axios.get("https://sethpowell.devcamp.space/portfolio/portfolio_items", {
            withCredentials: true
        }).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log("Error in getPortfolioItems", error)
        })
    }

    componentDidMount() {
        this.getPortfolioItems()
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>PortfolioForm</h1>
                </div>
                <div className="right-column">
                    <h1>PortfolioSidebar</h1>
                </div>
            </div>
        );
    }
}