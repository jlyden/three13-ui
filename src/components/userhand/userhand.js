import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import DeckCard from '../deckcard/deckcard';

function cardKey(card) {
  return card.suit + '_' + card.value;
}

class UserHand extends React.Component {
  render() {
    const displayCards = [];

    this.props.handOfCards.forEach((card) => {
      displayCards.push(
        <DeckCard card={card} key={cardKey(card)} />
      );
    });

    return (
      <CardGroup>
        {displayCards}
      </CardGroup>
    );
  }
}

export default UserHand;
