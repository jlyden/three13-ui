import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardFaceDown from '../card_face_down/card_face_down';

function cardKey(user, index) {
  return user + '_' + index;
}

class HandHidden extends React.Component {
  render() {
    const displayCards = [];
    for(let i=0; i<this.props.count; i++){
      displayCards.push(
        <CardFaceDown flex={this.props.flex} key={cardKey(this.props.user, i)} />
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

export default HandHidden;
