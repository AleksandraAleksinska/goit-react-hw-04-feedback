import React from 'react';
import PropTypes from "prop-types";
import css from './Notification.module.css'


const  Notification = ({message}) => {
  
  return (
    <span className={css.notificationMessage}>{message}</span>
  )
}

export default Notification

Notification.propTypes = {
  message: PropTypes.string.isRequired
}
