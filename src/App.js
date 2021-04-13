import React from 'react'
import './App.css'
import Qsound from '../public/sounds/Q.wav'
import Wsound from '../public/sounds/W.wav'
import Esound from '../public/sounds/E.wav'
import Asound from '../public/sounds/A.wav'
import Ssound from '../public/sounds/S.wav'
import Dsound from '../public/sounds/D.wav'
import Zsound from '../public/sounds/Z.wav'
import Xsound from '../public/sounds/X.wav'
import Csound from '../public/sounds/C.wav'
import Drumpad from './components/Drumpad'

function App() {
  return (
    <div id="drum-machine" className="container">
      <Drumpad stringID="Q" sound={Qsound}/>
      <Drumpad stringID="W" sound={Wsound}/>
      <Drumpad stringID="E" sound={Esound}/>
      <Drumpad stringID="A" sound={Asound}/>
      <Drumpad stringID="S" sound={Ssound}/>
      <Drumpad stringID="D" sound={Dsound}/>
      <Drumpad stringID="Z" sound={Zsound}/>
      <Drumpad stringID="X" sound={Xsound}/>
      <Drumpad stringID="C" sound={Csound}/>
    </div>
  )
}

export default App