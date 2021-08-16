import React from "react";

export default function(props) {
    // Functional components are used for rendering data in afixed way
    // Just pass this data and it will have very low level logic
    return (
        <div>
            <h2>{props.title}</h2>
            <h4>{props.url}</h4>
        </div>
    )
}