import React from 'react';
import { Link } from 'react-navi'
import Container from '@material-ui/core/Container';

const App: React.FC = () => (
  <Container maxWidth="md">
    <div>This is the first page!</div>

    <Link href="/second-page">Go to Second page</Link>
  </Container>
);

export default App;
