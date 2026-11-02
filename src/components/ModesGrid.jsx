import { useMemo } from 'react'
import { AppHeaderModos } from './AppHeader.jsx'
import ModeCard from './ModeCard.jsx'
import { modes, modesOrder } from '../data/modes.js'
import { calcularProgresso, sortearItem } from '../utils/storage.js'

export default function ModesGrid({ nome, modosVisitados = [], onSelecionarModo, onSair }) {
  const progresso = calcularProgresso(modosVisitados.length, modesOrder.length)

  // Sorteia uma dica entre as dicas de todos os modos ainda não vistos
  // (ou de todos, se já viu tudo) — nova sempre que a grade é montada.
  const dicaDoDia = useMemo(() => {
    const candidatos = modesOrder.filter((id) => !modosVisitados.includes(id))
    const origem = candidatos.length > 0 ? candidatos : modesOrder
    const idSorteado = sortearItem(origem)
    return idSorteado ? modes[idSorteado] : null
  }, [modosVisitados])

  return (
    <section className="tela modos-tela">
      <AppHeaderModos nome={nome} />

      <div className="topo-modos">
        <h2>📸 Câmera Inteligente</h2>
        <p>Escolha um modo para ver como ele melhora suas fotos.</p>

        <div className="progresso-modos" role="status">
          <div className="progresso-barra">
            <div className="progresso-preenchido" style={{ width: `${progresso}%` }} />
          </div>
          <span>
            {modosVisitados.length} de {modesOrder.length} modos explorados ({progresso}%)
          </span>
        </div>

        {dicaDoDia && (
          <p className="dica-do-dia">
            💡 Dica de hoje — <strong>{dicaDoDia.tituloCurto}:</strong> {dicaDoDia.dica}
          </p>
        )}
      </div>

      <div className="modos-container">
        {modesOrder.map((id) => (
          <ModeCard
            key={id}
            modo={modes[id]}
            visitado={modosVisitados.includes(id)}
            onSelecionar={onSelecionarModo}
          />
        ))}
      </div>

      {onSair && (
        <button type="button" className="botao-sair" onClick={onSair}>
          Sair da conta
        </button>
      )}
    </section>
  )
}
