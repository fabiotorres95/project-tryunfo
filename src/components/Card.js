import React from 'react';

class Card extends React.Component {
  render() {
    const { cardName } = this.props;
    const { cardDescription } = this.props;
    const { cardAttr1 } = this.props;
    const { cardAttr2 } = this.props;
    const { cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { cardRare } = this.props;
    const { cardTrunfo } = this.props;

    return console.log(':)');
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};
// Card.defaultProps = {
//   cardName: PropType.string,
//   cardDescription: PropType.string,
//   cardAttr1: PropType.string,
//   cardAttr2: PropType.string,
//   cardAttr3: PropType.string,
//   cardImage: PropType.string,
//   cardRare: PropType.string,
//   cardTrunfo: false,
// };

export default Card;
