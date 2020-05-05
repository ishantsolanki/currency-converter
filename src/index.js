import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld/HelloWorld.jsx';

const App = function () {
  return (
    <div>
      <div>Hello world</div>
      <span>That awesome feeling</span>
      <HelloWorld />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
