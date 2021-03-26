import React from 'react';

import styles from './shared-lib1.module.scss';

/* eslint-disable-next-line */
export interface SharedLib1Props {}

export function SharedLib1(props: SharedLib1Props) {
  return (
    <div>
      <h1 className={styles.lib1}>Welcome to shared-lib1!</h1>
    </div>
  );
}

export default SharedLib1;
