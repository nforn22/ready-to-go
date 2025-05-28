import React from 'react'

const ActionButton = ({ allSwitchesOn }) => {
    return(
        <button className={`action-btn ${allSwitchesOn ? 'go' : 'no-way'}`}>
            {allSwitchesOn ? 'Go  🚀' : 'No way  ⛔️'}
        </button>
    );
};

export default ActionButton;