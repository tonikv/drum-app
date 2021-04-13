
const Drumpad = ( {stringID, sound}) => {
    console.log("polku -->", sound)
    console.log("soittimen id -->", stringID)
    let soundEL = document.getElementById(`${stringID}`)
    console.log(soundEL)

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
