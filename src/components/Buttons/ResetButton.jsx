function ResetButton({ onReset }) {
    return(
        <button
            className='reset-btn'
            onClick={onReset}
        >
            RESET 🔄
        </button>
    )
}

export default ResetButton;