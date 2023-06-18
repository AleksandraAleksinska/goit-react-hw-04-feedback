import React from 'react';
import PropTypes from "prop-types";
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';



const Statistics = (props) => {
  return (
    <div className={css.statistics}>
         {props.total ? (<>
         <h2>Statistics</h2>
         <span className={css.statisticsLabel}>Good: <span className={css.statisticsValue}>{props.good}</span></span>
         <span className={css.statisticsLabel}>Neutral: <span className={css.statisticsValue}>{props.neutral}</span></span>
         <span className={css.statisticsLabel}>Bad: <span className={css.statisticsValue}>{props.bad}</span></span>
         <span className={css.statisticsLabel}>Total: <span className={css.statisticsValue}>{props.total}</span></span>
         <span className={css.statisticsLabel}>Positive feedback: <span className={css.statisticsValue}>{props.positivePercentage} %</span> </span>
         </>) : <Notification message='There is no feedback'/>} 
       </div>
  )
}

export default Statistics

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}
