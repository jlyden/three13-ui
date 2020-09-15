import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';

import { CardFaceUp, CardFaceDown } from '../card/card';

export class HandHidden extends React.Component {
  render() {
    const displayCards = [];
    for(let i=0; i<this.props.count; i++){
      displayCards.push(
        <CardFaceDown user={this.props.user} index={i} />
      );
    }

    return (
      <CardGroup>
        {displayCards}
      </CardGroup>
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
      <CardGroup>
        {displayCards}
      </CardGroup>
    );
  }
}
