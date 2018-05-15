import React from 'react';
import classes from './Spinner.css';

const Spinner = () => {
  return (
    <div className={classes.spinner}>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
    </div>
  )
}

export default Spinner;