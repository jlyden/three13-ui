import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CardFaceUp, CardFaceDown } from '../card/card';

function cardKey(card) {
  return card.suit + '_' + card.value;
}

export class DrawArea extends React.Component {
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
