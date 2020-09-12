import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DrawArea from '../drawarea/drawarea';
import OtherHand from '../otherhand/otherhand';
import UserHand from '../userhand/userhand';
import './table.css';

class Table extends React.Component {
  render() {
    return (
      <Container className='table'>
        <Row className="justify-content-md-center">
          <Col md={3} xs={2} />
          <Col>
            <OtherHand user='four' count={round} flex='row'></OtherHand>
          </Col>
          <Col md={3} xs={2} />
        </Row>
        <Row></Row>
        <Row>
          <Col md={2} xs={1}>
            <OtherHand user='two' count={round} flex='column'></OtherHand>
          </Col>
          <Col md={2} xs={1} />
          <Col md={4} xs={8}>
            <DrawArea faceCard={faceCard} />
          </Col>
          <Col md={2} xs={1} />
          <Col md={2} xs={1}>
            <OtherHand user='three' count={round} flex='column'></OtherHand>
          </Col>
        </Row>
        <Row></Row>
        <Row className="justify-content-md-center">
          <UserHand handOfCards={thisUserHand} />
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

export default Table;