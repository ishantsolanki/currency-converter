import React from 'react';
import * as ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld/HelloWorld';

const App:React.FC = () => (
  <div>
    <div>Hello world</div>
    <span>That awesome feeling</span>
    <HelloWorld />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
