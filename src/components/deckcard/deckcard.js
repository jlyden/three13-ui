import React from 'react';
import Card from 'react-bootstrap/Card';

import './deckcard.css';

class DeckCard extends React.Component {
  render() {
    const card = this.props.card;

    return (
      <Card className='deckcard'>
        <Card.Body>
          <Card.Title>
            {card.value} of {card.suit}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default DeckCard;
