import React from 'react';
import Card from 'react-bootstrap/Card';

import './card.css';

function downCardKey(user, index) {
  return user + '_' + index;
}

function upCardKey(card) {
  return card.suit + '_' + card.value;
}

export class CardFaceDown extends React.Component {
  render() {
    let className = 'card-face-down ' + this.props.flex;

    return (
      <Card className={className} key={downCardKey(this.props.user, this.props.index)}>
        <Card.Body />
      </Card>
    );
  }
}

export class CardFaceUp extends React.Component {
  render() {
    const card = this.props.card;

    return (
      <Card className='card-face-up' key={upCardKey(card)}>
        <Card.Body>
          <Card.Title>
            {card.value} of {card.suit}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
