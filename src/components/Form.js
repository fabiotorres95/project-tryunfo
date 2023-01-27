import React from 'react';
import PropType from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName } = this.props;
    const { cardDescription } = this.props;
    const { cardAttr1 } = this.props;
    const { cardAttr2 } = this.props;
    const { cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { cardRare } = this.props;
    const { cardTrunfo } = this.props;
    const { hasTrunfo } = this.props;
    const { isSaveButtonDisabled } = this.props;
    const { onInputChange } = this.props;
    const { onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          <input
            type="textarea"
            name="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          <input
            type="number"
            name="attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          <input
            type="text"
            name="image"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarity">
          <select name="rarity" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            type="checkbox"
            name="trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <label htmlFor="save">
          <input
            type="button"
            name="save"
            data-testid="save-button"
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};
// Form.defaultProps = {
//   cardName: PropType.string,
//   cardDescription: PropType.string,
//   cardAttr1: PropType.string,
//   cardAttr2: PropType.string,
//   cardAttr3: PropType.string,
//   cardImage: PropType.string,
//   cardRare: PropType.string,
//   cardTrunfo: false,
//   hasTrunfo: false,
//   isSaveButtonDisabled: true,
//   onInputChange: PropType.func,
//   onSaveButtonClick: PropType.func,
// };

export default Form;
