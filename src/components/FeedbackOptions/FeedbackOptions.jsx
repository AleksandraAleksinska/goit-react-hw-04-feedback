import React from 'react';
import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div>
      <ul className={css.buttonsSection}>
             {options.map((option => <li key={option.id}>
                 <button className={css.button} type='button' onClick={() => onLeaveFeedback(option.type)}>{option.name}</button>
              </li>))}
      </ul>
    </div>
  )
}

export default FeedbackOptions


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })),
  onLeaveFeedback: PropTypes.func
};