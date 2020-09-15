import React from 'react';
import Card from 'react-bootstrap/Card';

import './card.css';

function downCardKey(user, index) {
  return user + '_' + index;
}

function upCardKey(card) {
  return card.suit + '_' + card.value;
}

export class DeckFaceDown extends React.Component {
  render() {
    return (
      <Card className='card card-back' key={downCardKey(this.props.user, this.props.index)}>
        <Card.Body />
      </Card>
    );
  }
}

export class CardFaceDown extends React.Component {
  render() {
    return (
      <Card className='card card-back small' key={downCardKey(this.props.user, this.props.index)}>
        <Card.Body />
      </Card>
    );
  }
}

export class CardFaceUp extends React.Component {
  render() {
    const card = this.props.card;

    return (
      <Card className='card' key={upCardKey(card)}>
        <Card.Body>
          <Card.Title>
            {card.value} of {card.suit}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
