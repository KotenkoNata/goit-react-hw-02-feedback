import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.statistics}>
    <li className={styles.good}>Good: {good}</li>
    <li className={styles.neutral}>Neutral: {neutral}</li>
    <li className={styles.bad}>Bad: {bad}</li>
    <br />
    <li className={styles.total}>Total: {total}</li>
    <li className={styles.positive}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
