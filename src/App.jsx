import { useEffect, useState } from 'react'
import './App.css'
import { playKey } from './utils/playkey'
import { playAudio } from './utils/playaudio'

function App() {
  const [audioPlayed, setAudioPlayed] = useState('')

  useEffect(() => {
    window.addEventListener('keydown', (event) => playKey(event, setAudioPlayed));

    return () => {
      window.removeEventListener('keydown', (event) => playKey(event, setAudioPlayed));
    };
  }, []);


  return (
    <>
      <div id='drum-machine'>
      <div id='display'>{audioPlayed}</div>
      <div>
    <button id='Heater-1' className='drum-pad' onClick={(event) => playAudio(event, setAudioPlayed)}>
      Q
      <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
    </button>
    <button id='Heater-2' className='drum-pad' onClick={(event) => playAudio(event, setAudioPlayed)}>
      W
      <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>
    </button>
    <button id='Heater-3' className='drum-pad' onClick={(event) => playAudio(event, setAudioPlayed)}>
      E
      <audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>
    </button>
    <button id='Heater-4' className='drum-pad' onClick={(event) => playAudio(event, setAudioPlayed)}>
      A
      <audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>
    </button>
    <button id='Clap' className='drum-pad' onClick={(event) => playAudio(event, setAudioPlayed)}>
      S
      <audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>
    </button>
    <button id='Open-HH' className='drum-pad' onClick={(event) => playAudio(event, setAudioPlayed)}>
      D
      <audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>
    </button>
    <button id='Kick-n-Hat' className='drum-pad' onClick={(event) => playAudio(event, setAudioPlayed)}>
      Z
      <audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>
    </button>
    <button id='Kick' className='drum-pad' onClick={(event) => playAudio(event, setAudioPlayed)}>
      X
      <audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>
    </button>
    <button id='Closed-HH' className='drum-pad' onClick={(event) => playAudio(event, setAudioPlayed)}>
      C
      <audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>
    </button>
  </div>
      </div>
    </>
  )
}

export default App
