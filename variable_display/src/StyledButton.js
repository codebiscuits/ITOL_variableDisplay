import React, { useState } from 'react'

const StyledButton = () => {

    // let isDisabled = false;

    let [isDisabled, disableButton] = useState(false);

    const handleClick = () => {
        disableButton(true);
    };

    const headingStyle ={
        align: 'center',
        backgroundColor: 'light grey',
        color: 'purple'
    };

    const buttonStyle = {
        padding: '10px',
        backgroundColor: "light blue",
        color: 'purple',
        border: '1px black solid',
        borderRadius: '5px',
    };

    const buttonStyleDisabled = {
        padding: '10px',
        backgroundColor: "light grey",
        color: 'grey',
        border: '1px grey solid',
        borderRadius: '5px',
    };

  return (
    <div>
      <h1 style={headingStyle}>Inline Styling with JSX</h1>
      <button 
        className='styled-button' 
        onClick={handleClick} 
        style={isDisabled ? buttonStyleDisabled : buttonStyle} 
        disabled={isDisabled}
      >
        Click Me!
      </button>
    </div>
  );
};

export default StyledButton
