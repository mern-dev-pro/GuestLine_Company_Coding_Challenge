import React from 'react';

import Filter from 'components/UI/Fillter';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src="https://rl-uk2.azureedge.net/picturemanager/images/OBMNG2/hotel1.jpg" className={styles.img} />
      <Filter additionalClass={styles.filter} />
    </div>
  );
};

export default Header;
