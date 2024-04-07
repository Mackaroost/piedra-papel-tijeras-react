import "./App.css";
import { Choice } from "./choice";
import { randomChoice } from "./choice";
import { useState } from "react";

function App() {
  const [optionPlayer, setOptionPlayer] = useState(null);
  const [pcOption, setPcOption] = useState(null);
  const [result, setResult] = useState(null);

  const handleResult = () => {
    if (optionPlayer === pcOption) {
      setResult("Empate");
    } else if (
      (optionPlayer === "📃" && pcOption === "🪨") ||
      (optionPlayer === "🪨" && pcOption === "✂️") ||
      (optionPlayer === "✂️" && pcOption === "📃")
    ) {
      setResult("Ganastes !!!");
    } else {
      setResult("Perdistes!!!");
    }
  };

  const resetPartida = () => {
    setOptionPlayer("");
    setPcOption("");
    setResult("");
  };
  return (
    <>
      <header className="header">
        <h1>Piedra Papel o Tijera</h1>
      </header>
      <main>
        <h3>🥷 El futuro de la humanidad está en tus armas 👊</h3>
        <p className="mensaje">La batalla es a 5 rondas!!!</p>
        <h3> Elegi tu opcion </h3>
        <div className="armas">
          {Choice.map((item, index) => {
            return (
              <div key={index} className="jugador">
                <button
                  className="btn_armas"
                  value={item.name}
                  onClick={() => setOptionPlayer(item.emoji)}
                >
                  {item.emoji}
                </button>
              </div>
            );
          })}
        </div>
        <div className="computadora">
          <h3>Opcion del Contrincante</h3>
          <button
            className="computadoraBtn"
            onClick={() => setPcOption(randomChoice.emoji)}
          >
            Opcion de la Pc
          </button>
        </div>
        <h3> La partida es:</h3>
        <div className="tablero">
          <div className="btn_armas">{optionPlayer}</div>
          <p>VS</p>
          <div className="btn_armas">{pcOption}</div>
        </div>
        <div className="container-res">
          <div>
            <button className="resultados" onClick={handleResult}>
              {" "}
              Resultados{" "}
            </button>
          </div>
          <p className="mensaje">{result}</p>
        </div>

        <div className="reiniciar">
          <button className="reset" onClick={resetPartida}>
            {" "}
            Volver a Jugar
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
