import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  render() {
    return (
      <div className="item">
        <img
          className="img"
          alt={this.props.monster.name}
          src={`https://pokeres.bastionbot.org/images/pokemon/${this.props.monster.id}.png`}
        />
        <h5>{this.props.monster.name}</h5>
        <p>{this.props.monster.email}</p>
      </div>
    );
  }
}
