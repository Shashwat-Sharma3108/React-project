import React from 'react';

import classes from './Popup.module.css';

const Popup = (props) => {
    const HandleClick = ()=>{
        props.onButtonClick(false);
    }
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Validation Error</h2>
        </header>
        <div className={classes.content}>
          <p>Please Enter valid Details</p>
        <footer className={classes.actions}>
          <button onClick={HandleClick}>Okay</button>
        </footer>
        </div>
      </div>
    </div>
  );
};

export default Popup;