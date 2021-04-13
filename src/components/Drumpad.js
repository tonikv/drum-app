import React from 'react'


const Drumpad = ({keyTrigger, clip, clipId}) => {

    function playSound() {
        const sound = document.getElementById(keyTrigger);
        sound.currentTime = 0;
        sound.play();
    }

    return (
        <div
            className='drum-pad'
            id={clipId}
            onClick={playSound}
            >
                {clipId}
            <audio
            className='clip'
            id={keyTrigger}
            src={clip}
            />
        </div>
    )
}

export default Drumpad

