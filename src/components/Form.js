import React from 'react';

class Form extends React.Component {
  render() {
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

export default Form;
