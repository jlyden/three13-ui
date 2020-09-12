import React from 'react';
import Card from 'react-bootstrap/Card';

import './card_face_up.css';

class CardFaceUp extends React.Component {
  render() {
    const card = this.props.card;

    return (
      <Card className='card-face-up'>
        <Card.Body>
          <Card.Title>
            {card.value} of {card.suit}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default CardFaceUp;
