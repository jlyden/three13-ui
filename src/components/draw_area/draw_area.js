import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CardFaceUp from '../card_face_up/card_face_up';
import CardFaceDown from '../card_face_down/card_face_down';

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
            <CardFaceDown flex='row' />
            <CardFaceUp card={card} key={cardKey(card)} />
          </CardGroup>
        </Col>
      </Row>
    );
  }
}

export default DrawArea;
