import React, { Component } from "react";
import axios from "axios";
import "./Description.css"

const TOKEN = process.env.REACT_APP_KEY;

class Description extends Component {
  constructor() {
    super();
    this.state = {
      hero: null,
      loading: true
    };
    this.handleGetHero = this.handleGetHero.bind(this);
    this.getGender = this.getGender.bind(this);
  }

  async handleGetHero() {
    const { id } = this.props.match.params;
    const { data } = await axios.get(
      `/api/character/4005-${id}/?api_key=${TOKEN}&format=json&field_list=name,image,publisher,date_last_updated,deck,gender,real_name`
    );
    const { results } = data;
    this.setState(prevState => ({
      hero: results,
      loading: false
    }));
  }

  getGender(gender) {
    return {
      1: "Male",
      2: "Female",
      3: "Unknown"
    }[gender];
  }

  componentDidMount() {
    this.handleGetHero();
  }

  render() {
    const { hero, loading } = this.state;
    return <>
    { loading ? "loading..." : (
      <article className="description">
        <div className="description__left">
          <img
            src={ hero.image.medium_url }
            className="description-img"
            alt={ hero.name }
          />
        </div>
        <div className="description__right">
          <h1 className="title">{ hero.name }</h1>
          <ul className="info">
            <li>
              <span className="info-left">Real name:</span>
              <span className="info-right">{ hero.real_name }</span>
            </li>
            <li>
              <span className="info-left">Publisher:</span>
              <span className="info-right">{ hero.publisher.name }</span>
            </li>
            <li>
              <span className="info-left">Gender:</span>
              <span className="info-right">{ this.getGender(hero.gender) }</span>
            </li>
            <li>
              <span className="info-left">Updated:</span>
              <span className="info-right">{ hero.date_last_updated }</span>
            </li>
          </ul>
          <p className="description__text">{ hero.deck }</p>
        </div>
      </article>
      )}
      </>;
  }
}

export default Description;
