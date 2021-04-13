
const Drumpad = ( {stringID, sound}) => {

    function play() {
        let soundEL = document.getElementById(`${stringID}`)
        console.log(soundEL)
        soundEL.play()
    }

    return (
        <>
            <audio id={stringID}>
                <source src={sound} type="audio/wav"></source>
            </audio>

            <button 
                className="drum-pad"
                onClick={play}
                >
                {stringID} 
            </button>
        </>
    )
}

export default Drumpad
