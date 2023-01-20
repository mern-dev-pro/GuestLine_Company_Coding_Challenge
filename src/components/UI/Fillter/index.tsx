import React, { useState } from 'react';
import classnames from 'classnames';

import Rating from 'components/Basic/Rating';

import styles from './styles.module.scss';
import InDecrease from 'components/Basic/InDecrease';

type FilterProps = {
  additionalClass?: string;
};

const Filter: React.FC<FilterProps> = ({ additionalClass }) => {
  const [stars, setStars] = useState(5);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  return (
    <div className={classnames(styles.wrapper, additionalClass)}>
      <Rating rating={stars} changeRating={setStars} />
      <InDecrease label="Adults" value={adults} setValue={setAdults} />
      <InDecrease label="Children" value={children} setValue={setChildren} />
    </div>
  );
};

export default Filter;
