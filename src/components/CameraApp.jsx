import { useEffect, useState } from 'react'
import Login from './Login.jsx'
import Onboarding from './Onboarding.jsx'
import ModesGrid from './ModesGrid.jsx'
import CameraExperience from './camera/CameraExperience.jsx'
import { modes } from '../data/modes.js'
import {
  carregarUsuario,
  salvarUsuario,
  limparUsuario,
  carregarModosVisitados,
  registrarModoVisitado,
} from '../utils/storage.js'
import '../App.css'

// Telas do app, na mesma ordem/lógica do protótipo original:
// login -> onboarding -> grade de modos -> câmera (slideshow do modo escolhido)
const TELAS = {
  LOGIN: 'login',
  ONBOARDING: 'onboarding',
  MODOS: 'modos',
  CAMERA: 'camera',
}

export default function CameraApp({ onVoltarSite }) {
  const [tela, setTela] = useState(TELAS.LOGIN)
  const [usuario, setUsuario] = useState(null)
  const [modoSelecionado, setModoSelecionado] = useState(null)
  const [modosVisitados, setModosVisitados] = useState([])

  // Ao abrir o app, verifica no localStorage se já existe um usuário
  // logado antes (nome + preferências do onboarding). Se existir, pula
  // direto para a grade de modos — não precisa logar/onboardar de novo
  // a cada visita.
  useEffect(() => {
    const usuarioSalvo = carregarUsuario()
    if (usuarioSalvo) {
      setUsuario(usuarioSalvo)
      setModosVisitados(carregarModosVisitados())
      setTela(TELAS.MODOS)
    }
  }, [])

  function handleEntrar(nome) {
    setUsuario({ nome })
    setTela(TELAS.ONBOARDING)
  }

  function handleConcluirOnboarding(preferencias) {
    setUsuario((u) => {
      const usuarioCompleto = { ...u, ...preferencias }
      salvarUsuario(usuarioCompleto) // persiste no localStorage
      return usuarioCompleto
    })
    setTela(TELAS.MODOS)
  }

  function handleSelecionarModo(id) {
    setModoSelecionado(id)
    setModosVisitados(registrarModoVisitado(id)) // grava progresso
    setTela(TELAS.CAMERA)
  }

  function handleVoltar() {
    setModoSelecionado(null)
    setTela(TELAS.MODOS)
  }

  function handleSair() {
    limparUsuario()
    setUsuario(null)
    setModosVisitados([])
    setTela(TELAS.LOGIN)
  }

  return (
    <div id="app-container">
      {onVoltarSite && (
        <button type="button" className="botao-voltar-site" onClick={onVoltarSite}>
          ← Voltar ao site
        </button>
      )}

      {tela === TELAS.LOGIN && <Login onEntrar={handleEntrar} />}

      {tela === TELAS.ONBOARDING && (
        <Onboarding nome={usuario?.nome} onConcluir={handleConcluirOnboarding} />
      )}

      {tela === TELAS.MODOS && (
        <ModesGrid
          nome={usuario?.nome}
          modosVisitados={modosVisitados}
          onSelecionarModo={handleSelecionarModo}
          onSair={handleSair}
        />
      )}

      {tela === TELAS.CAMERA && modoSelecionado && (
        <CameraExperience key={modoSelecionado} modo={modes[modoSelecionado]} onVoltar={handleVoltar} />
      )}
    </div>
  )
}
