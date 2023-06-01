import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css'

export default class FeedbackOptions extends Component {

     render() {

    const { options, onLeaveFeedback } = this.props;

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
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })),
  onLeaveFeedback: PropTypes.func
};