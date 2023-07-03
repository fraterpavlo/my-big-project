import React, { FC } from 'react';
import { {{pascalCase}}Props } from '.';
import styles from './{{pascalCase}}.module.scss'

export const {{pascalCase}}: FC<{{pascalCase}}Props> = (props) => {
  return (<div className={styles.wrapper} {...props}>
    {{pascalCase}} component is mounted!
  </div>);
};
