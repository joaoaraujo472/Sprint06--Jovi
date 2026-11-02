import { useState } from 'react'
import { AppHeaderCamera } from '../AppHeader.jsx'
import SlideInfo from './SlideInfo.jsx'
import SlideQuando from './SlideQuando.jsx'
import SlideComparacao from './SlideComparacao.jsx'
import SlideScanner from './SlideScanner.jsx'

// Observação: o componente é remontado com key={modo.id} em App.jsx —
// assim, ao trocar de modo, o slide sempre volta pro início "de graça",
// sem precisar de um efeito para resetar o estado.
export default function CameraExperience({ modo, onVoltar }) {
  const [slideAtual, setSlideAtual] = useState(0)

  const totalSlides = modo.temScanner ? 4 : 3

  function irPara(index) {
    if (index < 0) index = totalSlides - 1
    if (index >= totalSlides) index = 0
    setSlideAtual(index)
  }

  return (
    <section className="tela camera-tela">
      <AppHeaderCamera tituloModo={modo.titulo} onVoltar={onVoltar} />

      <div className="slideshow-container">
        <SlideInfo modo={modo} ativo={slideAtual === 0} />
        <SlideQuando modo={modo} ativo={slideAtual === 1} />
        <SlideComparacao modo={modo} ativo={slideAtual === 2} />
        {modo.temScanner && <SlideScanner ativo={slideAtual === 3} />}
      </div>

      <div className="slideshow-controls">
        <button type="button" className="btn-nav" onClick={() => irPara(slideAtual - 1)} aria-label="Slide anterior">
          &#8592;
        </button>

        <div className="dots-container">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === slideAtual ? 'active' : ''}`}
              onClick={() => irPara(i)}
            />
          ))}
        </div>

        <button type="button" className="btn-nav" onClick={() => irPara(slideAtual + 1)} aria-label="Próximo slide">
          &#8594;
        </button>
      </div>
    </section>
  )
}
