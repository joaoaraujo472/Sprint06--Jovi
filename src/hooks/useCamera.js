import { useCallback, useRef, useState } from 'react'

// Hook que encapsula o acesso à câmera real do dispositivo (getUserMedia),
// para ser reaproveitado nos três pontos do app que precisam dela:
// foto "antes", foto "depois" e o scanner do Modo Documento.
export function useCamera() {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [erro, setErro] = useState(null)
  const [ativa, setAtiva] = useState(false)

  const iniciar = useCallback(async () => {
    setErro(null)
    try {
      const midia = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false,
      })
      streamRef.current = midia
      if (videoRef.current) {
        videoRef.current.srcObject = midia
        await videoRef.current.play()
      }
      setAtiva(true)
    } catch (e) {
      console.error('Erro ao acessar câmera:', e)
      setErro('Não foi possível acessar a câmera. Verifique as permissões do navegador.')
      setAtiva(false)
    }
  }, [])

  const parar = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop())
      streamRef.current = null
    }
    setAtiva(false)
  }, [])

  return { videoRef, iniciar, parar, erro, ativa }
}
