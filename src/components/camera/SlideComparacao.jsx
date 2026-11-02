import { useEffect, useRef, useState } from 'react'
import { useCamera } from '../../hooks/useCamera.js'

export default function SlideComparacao({ modo, ativo }) {
  const antes = useCamera()
  const depois = useCamera()

  const canvasAntesRef = useRef(null)
  const canvasDepoisRef = useRef(null)

  const [fotoAntes, setFotoAntes] = useState(null)
  const [fotoDepois, setFotoDepois] = useState(null)
  const [feedback, setFeedback] = useState('')

  // Este componente é remontado a cada troca de modo (key no componente pai),
  // então o estado de fotos já nasce zerado — só precisamos ligar/desligar
  // a câmera conforme o slide fica visível ou o componente desmonta.
  useEffect(() => {
    return () => {
      antes.parar()
      depois.parar()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (ativo && !fotoAntes) {
      antes.iniciar()
    }
    if (!ativo) {
      antes.parar()
      depois.parar()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ativo])

  function tirarFotoAntes() {
    const video = antes.videoRef.current
    const canvas = canvasAntesRef.current
    if (!video || !canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    ctx.filter = 'none'
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    setFotoAntes(canvas.toDataURL('image/jpeg'))
    antes.parar()

    setTimeout(() => {
      depois.iniciar()
    }, 500)
  }

  function tirarFotoDepois() {
    const video = depois.videoRef.current
    const canvas = canvasDepoisRef.current
    if (!video || !canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    ctx.filter = modo.filtro
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    setFotoDepois(canvas.toDataURL('image/jpeg'))
    depois.parar()

    setFeedback(modo.feedbackDepois)
    setTimeout(() => setFeedback(''), 5000)
  }

  return (
    <div className={`slide ${ativo ? 'active' : ''}`}>
      <div className="slide-content antes-depois">
        <h3>📷 Antes vs Depois</h3>
        <p className="instrucao-slide">
          Tire uma foto <strong>sem</strong> o modo ativado e depois <strong>com</strong> o modo ativado para
          comparar.
        </p>

        <div className="comparacao-fotos">
          <div className="foto-col">
            <span className="foto-label antes-label">ANTES</span>
            <div className="preview-box">
              {fotoAntes ? (
                <img src={fotoAntes} alt="Foto sem o modo ativado" />
              ) : (
                <>
                  <video ref={antes.videoRef} autoPlay playsInline muted />
                  {!antes.ativa && <span className="placeholder-texto">Câmera aqui</span>}
                </>
              )}
            </div>
            <button
              type="button"
              className="btn-tirar-foto"
              onClick={tirarFotoAntes}
              disabled={!antes.ativa || !!fotoAntes}
            >
              📷 Fotografar
            </button>
          </div>

          <div className="foto-col">
            <span className="foto-label depois-label">DEPOIS</span>
            <div className="preview-box">
              {fotoDepois ? (
                <img src={fotoDepois} alt="Foto com o modo ativado" />
              ) : (
                <>
                  <video ref={depois.videoRef} autoPlay playsInline muted />
                  {!depois.ativa && <span className="placeholder-texto">Câmera aqui</span>}
                </>
              )}
            </div>
            <button
              type="button"
              className="btn-tirar-foto"
              onClick={tirarFotoDepois}
              disabled={!depois.ativa || !!fotoDepois}
            >
              📷 Fotografar
            </button>
          </div>
        </div>

        {(antes.erro || depois.erro) && (
          <div className="aviso-box">⚠️ {antes.erro || depois.erro}</div>
        )}

        {feedback && (
          <div id="feedback-balao">
            <p>✨ {feedback}</p>
          </div>
        )}

        <canvas ref={canvasAntesRef} className="hidden" />
        <canvas ref={canvasDepoisRef} className="hidden" />
      </div>
    </div>
  )
}
