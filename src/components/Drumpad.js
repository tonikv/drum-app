
const Drumpad = ( {stringID, sound}) => {
    let soundEL = document.getElementById(`${stringID}`)

    return (
        <>
            <button 
                className="drum-pad"
                onClick={() => soundEL.play()}
                >
                {stringID} 
            </button>
            <audio id={stringID}>
                <source src={sound} type="audio/wav"></source>
            </audio>
        </>
    )
}

export default Drumpad
