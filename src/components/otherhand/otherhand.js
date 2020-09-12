import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import OtherCard from '../othercard/othercard';

function cardKey(user, index) {
  return user + '_' + index;
}

class OtherHand extends React.Component {
  render() {
    const displayCards = [];
    for(let i=0; i<this.props.count; i++){
      displayCards.push(
        <OtherCard flex={this.props.flex} key={cardKey(this.props.user, i)} />
      );
    }

    let className = 'flex-' + this.props.flex;

    return (
      <CardGroup className={className}>
        {displayCards}
      </CardGroup>
    );
  }
}

export default OtherHand;
