import React from 'react';
import Col from 'react-bootstrap/Col';

import { HandHidden } from '../../hand/hand';

export class RegionOtherUser extends React.Component {

  renderCol(order) {
    return (
      <Col xs={{ size: 3, order: order }}>
        <HandHidden
          user={this.props.user}
          count={this.props.count}
        />
      </Col>
    )
  }

  render() {
    return this.renderCol(this.props.order);
  }
}
