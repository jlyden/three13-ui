import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardFaceUp from '../card_face_up/card_face_up';

function cardKey(card) {
  return card.suit + '_' + card.value;
}

class HandVisible extends React.Component {
  render() {
    const displayCards = [];

    this.props.handOfCards.forEach((card) => {
      displayCards.push(
        <CardFaceUp card={card} key={cardKey(card)} />
      );
    });

    return (
      <CardGroup>
        {displayCards}
      </CardGroup>
    );
  }
}

export default HandVisible;
