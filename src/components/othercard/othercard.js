import React from 'react';
import Card from 'react-bootstrap/Card';

import './othercard.css';

class OtherCard extends React.Component {
  render() {
    let className = 'othercard ' + this.props.flex;

    return (
      <Card className={className}>
        <Card.Body />
      </Card>
    );
  }
}

export default OtherCard;
