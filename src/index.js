import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
  return (
    <div>
      <div>Hello world</div>
      <span>That awesome feeling</span>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
