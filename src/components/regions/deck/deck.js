import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CardFaceUp, DeckFaceDown } from '../../card/card';

export class RegionDeck extends React.Component {
  render() {
    const card = this.props.faceCard;

    return (
      <Row>
        <Col xs={4}/>
        <Col xs={3}>
          <CardGroup>
            <DeckFaceDown/>
            <CardFaceUp card={card} />
          </CardGroup>
        </Col>
        <Col xs={5}/>
      </Row>
    );
  }
}
