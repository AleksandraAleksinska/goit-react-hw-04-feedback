import React, { Component } from 'react';
import PropTypes from "prop-types";
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';


export default class Statistics extends Component {
  render() {

    const {
        good,
        neutral,
        bad, 
        total,
        positivePercentage
    } = this.props;
  

    return (
      <div className={css.statistics}>
        {total ? (<>
        <h2>Statistics</h2>
        <span className={css.statisticsLabel}>Good: <span className={css.statisticsValue}>{good}</span></span>
        <span className={css.statisticsLabel}>Neutral: <span className={css.statisticsValue}>{neutral}</span></span>
        <span className={css.statisticsLabel}>Bad: <span className={css.statisticsValue}>{bad}</span></span>
        <span className={css.statisticsLabel}>Total: <span className={css.statisticsValue}>{total}</span></span>
        <span className={css.statisticsLabel}>Positive feedback: <span className={css.statisticsValue}>{positivePercentage} %</span> </span>
        </>) : <Notification message='There is no feedback'/>} 
      </div>
    )
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}
