import React from 'react'

const ActionButton = ({ allSwitchesOn }) => {
    return(
        <button className={`action-btn ${allSwitchesOn ? 'go' : 'no-way'}`}>
            {allSwitchesOn ? (
                <>
                    Go <i className="fa-solid fa-rocket"></i>
                </> 
                ) : (
                <>    
                    No way <i className="fa-solid fa-ban"></i>
                </>    
                )}
        </button>
    );
};

export default ActionButton;