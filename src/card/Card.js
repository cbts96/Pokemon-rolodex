import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {

  render() {
    const {id}=this.props.monster
    return (
      <div className="item">
        <img
          className="img"
          alt={this.props.monster.name}
          src={`https://pokeres.bastionbot.org/images/pokemon/${this.props.monster.id}.png`}
        />
        <h5>{this.props.monster.name}</h5>
        <p>{this.props.monster.email}</p>
        <button onClick={()=>this.props.deleteCard(id)} className="button">DELETE</button>
      </div>
    );
  }
}
