import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import styles from './ViewOption.module.scss';

const ViewOptions = () => (
  <div className={'col-auto ' + styles.displayType}>
    <form>
      <label className={styles.Grid}>
        <FontAwesomeIcon icon={faThLarge} className=' fa'></FontAwesomeIcon>
      </label>
      <label className={styles.List}>
        <FontAwesomeIcon icon={faThList} className='fa '></FontAwesomeIcon>
      </label>
    </form>
  </div>
);

export default ViewOptions;
