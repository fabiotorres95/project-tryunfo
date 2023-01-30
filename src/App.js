import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validInputs = this.validInputs.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  validInputs = () => {
    const maxValue = 90;
    const maxTotalValue = 210;
    const { cardName } = this.state;
    const { cardDescription } = this.state;
    const { cardImage } = this.state;
    const { cardRare } = this.state;
    const { cardAttr1 } = this.state;
    const { cardAttr2 } = this.state;
    const { cardAttr3 } = this.state;
    let result = true;
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && Number(cardAttr1) >= 0
      && Number(cardAttr1) <= maxValue
      && Number(cardAttr2) >= 0
      && Number(cardAttr2) <= maxValue
      && Number(cardAttr3) >= 0
      && Number(cardAttr3) <= maxValue
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxTotalValue
    ) {
      result = false;
    } else {
      result = true;
    }
    this.setState(() => ({ isSaveButtonDisabled: result }));
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: value }), this.validInputs);
  };

  onSaveButtonClick = () => {
    const old = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
      // onInputChange:
      // onSaveButtonClick:
    };

    this.setState(() => ({
      cardName: old.cardName,
      cardDescription: old.cardDescription,
      cardAttr1: old.cardAttr1,
      cardAttr2: old.cardAttr2,
      cardAttr3: old.cardAttr3,
      cardImage: old.cardImage,
      cardRare: old.cardRare,
      cardTrunfo: old.cardTrunfo,
      isSaveButtonDisabled: old.isSaveButtonDisabled,
    }));
  };

  render() {
    const { cardName } = this.state;
    const { cardDescription } = this.state;
    const { cardAttr1 } = this.state;
    const { cardAttr2 } = this.state;
    const { cardAttr3 } = this.state;
    const { cardImage } = this.state;
    const { cardRare } = this.state;
    const { cardTrunfo } = this.state;
    // const { hasTrunfo } = this.state;
    const { isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
