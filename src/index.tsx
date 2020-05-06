import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { Router, View } from 'react-navi';
import routes from './router';

const App: React.FC = () => (
  <Router routes={routes}>
    <Suspense fallback={null}>
      <View />
    </Suspense>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
