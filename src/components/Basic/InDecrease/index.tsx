import React from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

import styles from './styles.module.scss';

type InDecreaseProps = {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const InDecrease: React.FC<InDecreaseProps> = ({ label, value, setValue }) => {
  const increaseValue = () => {
    setValue(value + 1);
  };
  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}:</span>
      <button className={styles.button} onClick={increaseValue}>
        <PlusIcon width={20} height={20} />
      </button>
      <span className={styles.value}>{value}</span>
      <button className={styles.button} onClick={decreaseValue} disabled={value === 0}>
        <MinusIcon width={20} height={20} />
      </button>
    </div>
  );
};

export default InDecrease;
