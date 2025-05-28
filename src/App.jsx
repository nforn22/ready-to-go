import React, {useState} from 'react'
import Header from './components/Header/Header'
import SwitchButton from './components/Buttons/SwitchButton'
import ActionButton from './components/Buttons/ActionButton'
import ResetButton from './components/Buttons/ResetButton'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  // état des 3 interrupteurs
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  // vérifie si tout les interrupteurs sont sur ON
  const allSwitchesOn = switch1 && switch2 && switch3;

  // reset => remet tout les interupteurs sur OFF
  const resetAllSwitches = () => {
    setSwitch1(false)
    setSwitch2(false)
    setSwitch3(false)
  }

  return (
    <>
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="switches-container">
          <SwitchButton 
            isOn={switch1}
            onToggle={(value) => setSwitch1(value)}
          />
          <SwitchButton 
            isOn={switch2}
            onToggle={(value) => setSwitch2(value)}
          />
          <SwitchButton 
            isOn={switch3}
            onToggle={(value) => setSwitch3(value)}
          />
        </div>

        <div className="buttons-container">
          <ActionButton allSwitchesOn={allSwitchesOn} />
          <ResetButton onReset={resetAllSwitches} />
        </div>
      </main>

      <Footer />
    </div>
    </>
  )
}

export default App;
