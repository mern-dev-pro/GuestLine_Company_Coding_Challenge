import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

type TextProps = {
  content: string;
  size: 'title' | 'heading' | 'pharagraph';
  additionalClass?: string;
};

const Text: React.FC<TextProps> = ({ content, additionalClass, size }) => {
  return (
    <div
      className={classnames(styles.wrapper, additionalClass, {
        [styles.title]: size === 'title',
        [styles.heading]: size === 'heading',
        [styles.pharagraph]: size === 'pharagraph',
      })}
    >
      {content}
    </div>
  );
};

export default Text;
