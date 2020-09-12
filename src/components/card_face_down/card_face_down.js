import React from 'react';
import Card from 'react-bootstrap/Card';

import './card_face_down.css';

class CardFaceDown extends React.Component {
  render() {
    let className = 'card-face-down ' + this.props.flex;

    return (
      <Card className={className}>
        <Card.Body />
      </Card>
    );
  }
}

export default CardFaceDown;
