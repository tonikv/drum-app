import React from 'react'
import Drumpad from './DrumPad';

const PadBank = ( {sounds, handleChange} ) => {
    let padBank;
    padBank = sounds.map((drumObj, i, padBankArr) => {
        return (
            <Drumpad
                clip={padBankArr[i].url}
                clipId={padBankArr[i].id}
                keyCode={padBankArr[i].keyCode}
                keyTrigger={padBankArr[i].keyTrigger}
                handleChange={handleChange}
            />
        );
    });

    return (
        <div className='pad-bank'>{padBank}</div>
    )
}

export default PadBank
