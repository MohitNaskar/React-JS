import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      {props.location === "Online" && props.openSpots > 0 && <div className="card-badge">ONLINE</div>}

      <img src={props.img} className="card-img" alt="experience" /> 

      <div className="card-stats">
        <span className="rating-star">★</span>
        <span className="card-rating">{props.rating}</span>
        <span className="gray">({props.reviewCount}) • {props.country}</span>
      </div>

      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
