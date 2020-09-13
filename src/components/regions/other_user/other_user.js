import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { HandHidden } from '../../hand/hand';

export class RegionOtherUser extends React.Component {

  renderTopRow() {
    return (
      <Row>
        <Col xs={3} />
        <Col xs={6}>
          <HandHidden
            user={this.props.user}
            count={this.props.count}
            flex='row' />
        </Col>
        <Col xs={3} />
      </Row>
    )
  }

  renderCol(order) {
    return (
      <Col xs={{ size: 2, order: order }}>
        <HandHidden
          user={this.props.user}
          count={this.props.count}
          flex='column' />
      </Col>
    )
  }

  render() {
    switch (this.props.location) {
      case 'top':
        return this.renderTopRow();
      case 'left':
        return this.renderCol('first');
      case 'right':
        return this.renderCol('last');
      default:
        return;
    }
  }
}
