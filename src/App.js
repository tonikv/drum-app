import React from 'react'
import './App.css'
import Qsound from './sounds/Q.wav'
import Wsound from './sounds/W.wav'
import Esound from './sounds/E.wav'
import Asound from './sounds/A.wav'
import Ssound from './sounds/S.wav'
import Dsound from './sounds/D.wav'
import Zsound from './sounds/Z.wav'
import Xsound from './sounds/X.wav'
import Csound from './sounds/C.wav'
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