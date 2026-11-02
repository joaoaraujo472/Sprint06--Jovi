import { useState } from 'react'
import Logo from './Logo.jsx'

export default function Login({ onEntrar }) {
  const [nome, setNome] = useState('')
  const [rm, setRm] = useState('')
  const [erro, setErro] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (nome.trim().length < 3) {
      setErro('Por favor, insira um nome válido (mínimo 3 caracteres).')
      return
    }
    if (rm.trim().length < 5) {
      setErro('O RM deve ter pelo menos 5 dígitos.')
      return
    }

    setErro('')
    onEntrar(nome.trim())
  }

  return (
    <section className="tela login-tela">
      <div className="login-logo">
        <Logo />
        <p>Smartphones para estudantes</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <h2>Acesse seu Perfil</h2>

        <div className="input-group">
          <label htmlFor="username">Nome Completo:</label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="rm">RM do Aluno ou Professor:</label>
          <input
            type="number"
            id="rm"
            placeholder="Ex: 55432"
            value={rm}
            onChange={(e) => setRm(e.target.value)}
            required
          />
        </div>

        {erro && <p className="mensagem-erro" role="alert">{erro}</p>}

        <button type="submit" className="botao-primario">
          Iniciar Configuração
        </button>
      </form>
    </section>
  )
}
