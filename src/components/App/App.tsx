import React from 'react';
import { Link } from 'react-navi'

const App: React.FC = () => (
  <div>
    <Link href="/second-page">Go to Second page</Link>
    <div>Hello world</div>
    <span>That awesome feeling</span>
  </div>
);

export default App;
