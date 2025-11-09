import React from "react";
import data from "../data.js";
import Place from "./Place.js";

export default function PlaceList() {
    const placeElements = data.map(item =>
            <Place
                key={item.id}
                {...item}
            />
    );
    return <div className="place-list">{placeElements}</div>;
}