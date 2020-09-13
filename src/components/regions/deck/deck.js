import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';

import { CardFaceUp, CardFaceDown } from '../../card/card';

export class RegionDeck extends React.Component {
  render() {
    const card = this.props.faceCard;

    return (
      <Col xs={4}>
        <CardDeck>
          <CardFaceDown flex='row' />
          <CardFaceUp card={card} />
        </CardDeck>
      </Col>
    );
  }
}
