import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';

import { CardFaceUp, CardFaceDown } from '../card/card';

export class HandHidden extends React.Component {
  render() {
    const displayCards = [];
    for(let i=0; i<this.props.count; i++){
      displayCards.push(
        <CardFaceDown flex={this.props.flex} user={this.props.user} index={i} />
      );
    }

    let className = 'flex-' + this.props.flex;

    return (
      <CardDeck className={className}>
        {displayCards}
      </CardDeck>
    );
  }
}

export class HandVisible extends React.Component {
  render() {
    const displayCards = [];

    this.props.handOfCards.forEach((card) => {
      displayCards.push(
        <CardFaceUp card={card} />
      );
    });

    return (
      <CardDeck>
        {displayCards}
      </CardDeck>
    );
  }
}
