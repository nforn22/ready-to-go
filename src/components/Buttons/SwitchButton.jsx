import React from 'react'

const SwitchButton = ({ isOn, onToggle }) => {
    return(
        <diw classname="switch-container">
            <button
                onClick={() => onToggle(true)}
                className={`switch-btn ${isOn ? 'active' : ''}`}
            >
                ON
            </button>
            <button
                onClick={() => onToggle(false)}
                className={`switch-btn ${!isOn ? 'active' : ''}`}
            >
                OFF
            </button>
        </diw>
    );
};

export default SwitchButton;