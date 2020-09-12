import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import DeckCard from '../deckcard/deckcard';
import OtherCard from '../othercard/othercard';

function cardKey(card) {
  return card.suit + '_' + card.value;
}

class DrawArea extends React.Component {
  render() {
    const card = this.props.faceCard;

    return (
      <Row>
        <Col>
          <CardGroup>
            <OtherCard />
            <DeckCard card={card} key={cardKey(card)} />
          </CardGroup>
        </Col>
      </Row>
    );
  }
}

export default DrawArea;
