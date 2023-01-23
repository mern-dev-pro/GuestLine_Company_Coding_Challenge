/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import Rating from 'components/Basic/Rating';

import styles from './styles.module.scss';
import InDecrease from 'components/Basic/InDecrease';
import { useNavigate, useSearchParams } from 'react-router-dom';

type FilterProps = {
  additionalClass?: string;
};

const Filter: React.FC<FilterProps> = ({ additionalClass }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [stars, setStars] = useState(parseInt(searchParams.get('star') ?? '0'));
  const [adults, setAdults] = useState(parseInt(searchParams.get('adults') ?? '0'));
  const [children, setChildren] = useState(parseInt(searchParams.get('children') ?? '0'));
  useEffect(() => {
    if (stars !== 0 || adults >= 0 || children >= 0) navigate(`/?star=${stars}&adults=${adults}&children=${children}`);
  }, [stars, adults, children]);

  return (
    <div className={classnames(styles.wrapper, additionalClass)}>
      <Rating rating={stars} changeRating={setStars} />
      <InDecrease label="Adults" value={adults} setValue={setAdults} />
      <InDecrease label="Children" value={children} setValue={setChildren} />
    </div>
  );
};

export default Filter;
