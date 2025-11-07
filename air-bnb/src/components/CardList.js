import React from "react";
import Card from "./Card";
import data from "../data"; // we will define this next

export default function CardList() {
  const cardElements = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <section className="card-list">
      {cardElements}
    </section>
  );
}
