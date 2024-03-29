import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validInputs = this.validInputs.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedData: [],
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
    const { cardTrunfo } = this.state;
    const { savedData } = this.state;
    savedData.push(this.state);
    console.log(savedData);
    const old = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: true,
      isSaveButtonDisabled: true,
    };

    if (cardTrunfo) {
      this.setState(() => ({
        cardName: old.cardName,
        cardDescription: old.cardDescription,
        cardAttr1: old.cardAttr1,
        cardAttr2: old.cardAttr2,
        cardAttr3: old.cardAttr3,
        cardImage: old.cardImage,
        cardRare: old.cardRare,
        cardTrunfo: old.cardTrunfo,
        hasTrunfo: old.hasTrunfo,
        isSaveButtonDisabled: old.isSaveButtonDisabled,
      }));
    } else {
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
    }
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
    const { hasTrunfo } = this.state;
    const { isSaveButtonDisabled } = this.state;
    const { savedData } = this.state;

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
          hasTrunfo={ hasTrunfo }
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
        { savedData.map((obj) => (
          <Card
            key={ obj.cardName }
            cardName={ obj.cardName }
            cardImage={ obj.cardImage }
            cardDescription={ obj.cardDescription }
            cardAttr1={ obj.cardAttr1 }
            cardAttr2={ obj.cardAttr2 }
            cardAttr3={ obj.cardAttr3 }
            cardRare={ obj.cardRare }
            cardTrunfo={ obj.cardTrunfo }
          />
        )) }
      </div>
    );
  }
}

export default App;
