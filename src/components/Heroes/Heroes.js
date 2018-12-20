import React from "react";
import { Link } from "react-router-dom";
import "./Heroes.css";

export default props => (
  <li className="col">
    <article className="hero">
      <header className="hero-top">
        <img
          src={props.item.image.medium_url}
          className="hero-img"
          alt={props.item.name}
        />
      </header>
      <h3 className="title">
        <Link className="hero-link" to={`description/${props.item.id}`}>
          {props.item.name}
        </Link>
      </h3>
      <span className="company-name">{props.item.publisher.name}</span>
      <span className="issues">{props.item.id} issues</span>
    </article>
  </li>
);
