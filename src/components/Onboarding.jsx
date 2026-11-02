import { useState } from 'react'
import { frequenciasOnboarding, usosOnboarding } from '../data/modes.js'

// No protótipo original, essa etapa usava window.prompt()/alert() do navegador.
// Aqui viramos duas etapas reais dentro da própria interface: primeiro a
// frequência de uso, depois o uso principal — mantendo a mesma ideia
// (personalizar a experiência), mas de um jeito que funciona como app de verdade.
export default function Onboarding({ nome, onConcluir }) {
  const [etapa, setEtapa] = useState(1)
  const [frequencia, setFrequencia] = useState(null)

  function escolherFrequencia(valor) {
    setFrequencia(valor)
    setEtapa(2)
  }

  function escolherUso(valor) {
    onConcluir({ frequencia, usoPrincipal: valor })
  }

  return (
    <section className="tela onboarding-tela">
      {etapa === 1 ? (
        <>
          <h2>Oi, {nome}! Vamos personalizar</h2>
          <p>Com que frequência você usa a câmera por dia?</p>

          <div className="options">
            {frequenciasOnboarding.map((f) => (
              <button
                key={f.value}
                type="button"
                className="opt-btn opt-btn-freq"
                onClick={() => escolherFrequencia(f.value)}
              >
                <span className="opt-btn-label">{f.label}</span>
                <span className="opt-btn-hint">{f.hint}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>Personalize sua Experiência</h2>
          <p>Como você mais utiliza a câmera?</p>

          <div className="options">
            {usosOnboarding.map((uso) => (
              <button
                key={uso.value}
                type="button"
                className="opt-btn"
                onClick={() => escolherUso(uso.value)}
              >
                <span className="opt-btn-icon">{uso.icon}</span> {uso.label}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
