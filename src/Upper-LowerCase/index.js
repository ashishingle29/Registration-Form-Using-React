import React from 'react';
import './index.css';

class UpperLowerCase extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      showParagraph: false,
    };
  }
  render() {
    return (
      <div class='main'>
      <h1>LowerCase to UpperCase & UpperCAase To LowerCase</h1>
        <textarea 
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <br />
        <button
          onClick={() => {
            this.setState({
              showParagraph: !this.state.showParagraph,
            });
          }}
        >
          Display in uppercase
        </button>
        <div class="result">
        {this.state.showParagraph && <p>{this.state.input.toUpperCase()}</p>}
        </div>
      </div>
    );
  }
}

export default UpperLowerCase;