import { useState } from 'react'
import lampada from './assets/lampada.png'
import genio from './assets/genio.png'
import './Style.scss'

export default function App() {

const [aladin, setAladin] = useState(lampada)

const genioDaLampada = () => {
  setAladin((prevAladdin) => (prevAladdin === lampada ? genio : lampada));
};

  return(
    <main>
      <h1>Liberte a magia da programação com a lâmpada de Aladim.</h1>
      <source media='(max-width:896px)' srcSet='lampadaresponsiva.png' />
      <img src={aladin} alt="Imagem de uma lampada mágica" />
      <div>
        <button onClick={genioDaLampada}  >Clique aqui</button>
      </div>
    </main>
  )
}
