import Logo from './Logo.jsx'

// Cabeçalho usado na grade de modos (mostra a marca + usuário logado)
export function AppHeaderModos({ nome }) {
  return (
    <header className="app-header">
      <Logo className="header-logo" />
      <span id="usuario-nome">Olá, {nome}!</span>
    </header>
  )
}

// Cabeçalho usado na tela de câmera/slideshow (voltar + nome do modo)
export function AppHeaderCamera({ tituloModo, onVoltar }) {
  return (
    <header className="app-header">
      <button type="button" id="btn-voltar" onClick={onVoltar}>
        ← Voltar
      </button>
      <span id="modo-atual">Modo: {tituloModo}</span>
    </header>
  )
}
