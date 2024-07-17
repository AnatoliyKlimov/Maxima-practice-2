import React from 'react';
import styles from '../radio-button/radioButton.module.css';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'option1',
    };
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  render() {
    return (
      <div className={styles['radio-buttons']}>
        <label>
          <input type="radio" value="option1" 
                 checked={this.state.selectedOption === 'option1'} 
                 onChange={this.handleOptionChange} 
                 className={styles['radio-button']}/>
        </label>
        <label>
          <input type="radio" value="option2" 
                 checked={this.state.selectedOption === 'option2'} 
                 onChange={this.handleOptionChange} 
                 className={styles['radio-button']}/>
        </label>
      </div>
    );
  }
}

export default RadioButton;
