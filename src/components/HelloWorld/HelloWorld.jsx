import React from 'react';

import styles from './HelloWorld.module.css';

console.log(styles);
const HelloWorld = () => (
  <div className={styles.container}>
    I am styled within the components scope
  </div>
);

export default HelloWorld;
