import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { RegionDeck } from '../regions/deck/deck';
import { RegionOtherUser } from '../regions/other_user/other_user';
import { RegionUser } from '../regions/user/user';
import './table.css';

export class Table extends React.Component {
  render() {
    return (
      <Container className='table'>
        <RegionOtherUser location='top' user='four' count={round} />
        <Row>
          <RegionOtherUser location='left' user='two' count={round} />
          <Col xs={3} />
          <RegionDeck faceCard={faceCard} />
          <Col xs={3} />
          <RegionOtherUser location='right' user='three' count={round} />
        </Row>
        <Row></Row>
        <RegionUser handOfCards={thisUserHand} />
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
