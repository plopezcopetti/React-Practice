import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  // Add your methods in here.
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));
