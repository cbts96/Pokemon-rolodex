import React, { Component } from 'react';
import Card from "../card/Card";
import "./Cardlist.scss";

export default class Cardlist extends Component {
    render() {
        return (
            <div className="box">
                {this.props.monster.map((value,key)=>{
                    return (
                    <Card key={key} monster={value} deleteCard={this.props.deleteCard}/>
                    )
                })}
            </div>
        )
    }
}
