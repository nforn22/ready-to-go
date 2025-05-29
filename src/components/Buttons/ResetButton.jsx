function ResetButton({ onReset }) {
    return(
        <button
            className='reset-btn'
            onClick={onReset}
        >
            Reset <i className="fa-solid fa-arrows-rotate"></i>
        </button>
    )
}

export default ResetButton;