import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { HandVisible } from '../../hand/hand';

export class RegionUser extends React.Component {
  render() {
    return (
      <Row>
        <Col />
        <Col xs={8}>
          <HandVisible handOfCards={this.props.handOfCards} />
        </Col>
        <Col />
      </Row>
    )
  }
}
