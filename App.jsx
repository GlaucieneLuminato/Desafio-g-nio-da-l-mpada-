import { useStates } from "react";
import style from "App.scss";

export default function App() {

  const [lampada, setLampada] = useStates(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  }

  return (
    <main>
    <h1> "Liberte a magia da programação com a lâmpada de Aladim"
    </h1>
    <img src={ lampada ? "lampadamagica.png" : "geniolampada.png" } alt="Lâmpada"
    onclick={trocarLampada}/>
    

    </main>
  )
}