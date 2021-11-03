//component that returns h1 and displays a title
//style it to your liking

import type { ReactNode } from 'react';
import React from 'react';
import classes from './title.module.css';

type TitleProps = {
  children: ReactNode;
};
function Title({ children }: TitleProps): JSX.Element {
  return <h1 className={classes.title}>{children}</h1>;
}

export default Title;
