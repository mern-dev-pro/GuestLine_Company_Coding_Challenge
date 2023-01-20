import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

type ContainerProps = {
  children: React.ReactNode;
  additionalClass?: string;
};

const Container: React.FC<ContainerProps> = ({ children, additionalClass }) => {
  return <div className={classnames(styles.wrapper, additionalClass)}>{children}</div>;
};

export default Container;
