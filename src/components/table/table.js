import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import UserHand from '../userhand/userhand';
import './table.css';

class Table extends React.Component {
  render() {    
    return (
      <Container className='table'>
        <Row>
          TBD: User Four
        </Row>
        <Row>
          <Col md={3}>
            TBD: User Two
          </Col>
          <Col md={6}>
            TBD: Deck and FaceCard
          </Col>
          <Col md={3}>
            TBD: User Three
          </Col>
        </Row>
        <Row>
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

export default Table;