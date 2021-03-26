import React from 'react';

import {SharedLib1} from '@next-nx-sass/shared/lib1';

import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <h2>Resources &amp; Tools</h2>
      <p>Thank you for using and showing some ♥ for Nx.</p>
     <SharedLib1/>
    </div>
  );
}

export default Index;
