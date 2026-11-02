import { useEffect, useRef, useState } from 'react'
import { useCamera } from '../../hooks/useCamera.js'

export default function SlideScanner({ ativo }) {
  const scanner = useCamera()
  const canvasRef = useRef(null)
  const [lendo, setLendo] = useState(false)
  const [resultado, setResultado] = useState('O texto detectado aparecerá aqui...')

  useEffect(() => {
    if (ativo) {
      scanner.iniciar()
    } else {
      scanner.parar()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ativo])

  async function escanear() {
    const video = scanner.videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    setLendo(true)
    setResultado('Fazendo a leitura... aguarde')

    const ctx = canvas.getContext('2d')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    ctx.filter = 'contrast(1.2) grayscale(1)'
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    try {
      const { default: Tesseract } = await import('tesseract.js')
      const resultadoOcr = await Tesseract.recognize(canvas, 'por')
      const texto = resultadoOcr.data.text.trim()
      setResultado(texto.length > 0 ? texto : 'Não foi possível identificar texto. Tente aproximar mais.')
    } catch (e) {
      console.error(e)
      setResultado('Erro ao processar a imagem.')
    } finally {
      setLendo(false)
    }
  }

  return (
    <div className={`slide ${ativo ? 'active' : ''}`}>
      <div className="slide-content">
        <h3>🔍 Scanner de Texto</h3>
        <p>Aponte para um texto e extraia o conteúdo automaticamente.</p>

        <div className="scanner-area">
          <video ref={scanner.videoRef} autoPlay playsInline muted />
        </div>

        {scanner.erro && <div className="aviso-box">⚠️ {scanner.erro}</div>}

        <button type="button" id="btn-escanear" onClick={escanear} disabled={!scanner.ativa || lendo}>
          {lendo ? 'Lendo...' : 'Ler Texto'}
        </button>

        <div id="resultado-scanner">{resultado}</div>

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  )
}
