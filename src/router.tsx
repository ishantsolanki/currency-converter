import React from 'react';
import { mount, route } from 'navi';
import App from './components/App/App';
import HelloWorld from './components/HelloWorld/HelloWorld';

const routes = mount({
  '/': route({
    title: 'First page',
    view: <App />,
  }),
  '/second-page': route({
    title: 'Second page',
    view: <HelloWorld />,
  }),
});

export default routes;
