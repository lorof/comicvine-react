import React, { Component } from "react";
import axios from "axios";
import Heroes from "../Heroes/Heroes";
import "./Home.css";

const TOKEN = process.env.REACT_APP_KEY;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      loading: false
    };
    this.handleGetHeroes = this.handleGetHeroes.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  async handleGetHeroes() {
    const { data } = await axios.get(
      `/api/characters/?api_key=${TOKEN}&format=json&field_list=name,image,publisher,first_appeared_in_issue,id&limit=6`
    );
    const { results } = data;
    this.setState(prevState => ({
      heroes: results
    }));
  }

  async handleShowMore() {
    this.setState(prevState => ({
      loading: true
    }));
    const { data } = await axios.get(
      `/api/characters/?api_key=${TOKEN}&format=json&field_list=name,image,publisher,first_appeared_in_issue,id`
    );
    const { results } = data;
    this.setState(prevState => ({
      heroes: results,
      loading: false
    }));
  }

  componentDidMount() {
    this.handleGetHeroes();
  }

  render() {
    const { heroes, loading } = this.state;
    return (
      <>
        <ul className="grid">
          {heroes.map(item => (
            <Heroes item={item} key={item.id} />
          ))}
        </ul>
        {heroes.length === 6 ? (
          <button className="show-more" onClick={this.handleShowMore}>
            {loading ? "loading..." : "show more"}
          </button>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Home;
