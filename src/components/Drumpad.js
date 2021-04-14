import React, { useEffect } from 'react'


const Drumpad = ({keyTrigger, clip, clipId, handleChange}) => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        // cleanup this component
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    const handleKeyDown = (event) => {
        let playThis = {}
        switch(event.keyCode) {
            case 81:
                playThis = 
                { key: "Q", id: 'Heater-1'}
                break;
            case 87:
                playThis = 
                { key: "W", id: 'Heater-2'}
                break;
            case 69:
                playThis = 
                { key: "E", id: 'Heater-3'}
                break;
            case 65:
                playThis =
                { key: "A", id: 'Heater-4'}
                break;
            case 83:
                playThis = 
                { key: "S", id: 'Clap'}
                break;
            case 68:
                playThis =
                { key: "D", id: 'Open-HH'}
                break;
            case 90:
                playThis =
                { key: "Z", id: "Kick-n'-Hat"}
                break;
            case 88:
                playThis =
                { key: "X", id: 'Kick'}
                break;
            case 67:
                playThis =
                { key: "C", id: 'Closed-HH'}
                break;
            default:
                playThis = { key: "notvalid" }
                break;
        }
        if (playThis.key !== "notvalid") {
            playSoundKey(playThis)
        }
    }

    const playSoundKey = (playThis) => {
        const sound = document.getElementById(playThis.key);
        handleChange(playThis.id)
        sound.currentTime = 0;
        sound.play();
    }

    function playSound(id) {
        const sound = document.getElementById(keyTrigger);
        handleChange(id.clipId)
        sound.currentTime = 0;
        sound.play();
    }

    return (
        <div
            className='drum-pad'
            id={clipId}
            onClick={() => playSound({clipId})}
            >
                <p>{keyTrigger}</p>
            
            <audio
            className='clip'
            id={keyTrigger}
            src={clip}
            />
        </div>
    )
}

export default Drumpad

