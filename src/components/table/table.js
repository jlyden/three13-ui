import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { DrawArea } from '../draw_area/draw_area';
import { HandHidden, HandVisible } from '../hand/hand';
import './table.css';

export class Table extends React.Component {
  render() {
    return (
      <Container className='table'>
        <Row className="justify-content-xs-center">
          <Col />
          <Col xs={6}>
            <HandHidden user='four' count={round} flex='row'></HandHidden>
          </Col>
          <Col />
        </Row>
        <Row>
          <Col>
            <HandHidden xs={{ order: 'first' }} user='two' count={round} flex='column'></HandHidden>
          </Col>
          <Col xs={4}>
            <DrawArea faceCard={faceCard} />
          </Col>
          <Col xs={{ order: 'last' }}>
            <HandHidden user='three' count={round} flex='column'></HandHidden>
          </Col>
        </Row>
        <Row></Row>
        <Row className="justify-content-xs-center">
          <Col />
          <Col xs={6}>
            <HandVisible handOfCards={thisUserHand} />
          </Col>
          <Col />
        </Row>
      </Container>
    )
  }
}

const thisUserHand = [
  { suit: 'Hearts', value: 9 },
  { suit: 'Hearts', value: 10 },
  { suit: 'Hearts', value: 11 },
  { suit: 'Diamonds', value: 7 },
  { suit: 'Joker', value: 3 },
];

const round = thisUserHand.length;

const faceCard = { suit: 'Diamonds', value: 5 };
