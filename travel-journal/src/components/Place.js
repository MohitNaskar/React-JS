import React from "react";

export default function Place(props) {
    return (
        <div className="place-container">
            <img src={props.imageUrl} className="place-image" alt={props.title} />
            <div className="place-text">
                <h2>{props.title}</h2>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}