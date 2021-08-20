import React from "react";
import {Link} from 'react-router-dom'

export default function company(props) {
    // data that i'll need
    //- background img: thumb_image_url
    // - logo img: logo_url
    // - description: description
    // - id: id

    const { id, description, thumb_image_url, logo_url } = props.item
    // you could also alternatively do props.item.key_name
    return (
        <div className="portfolio-item-wrapper">
            <div
            className="portfolio-img-background"
            style={{
                backgroundImage: "url(" + thumb_image_url + ")"
            }} 
            />

            <div className="img-text-wrapper">
                <div className="logo-wrapper">
                    <img src={logo_url} alt="logo" />
                </div>

                <div className="subtitle">{description}</div>
            </div>
        </div>
    )
}