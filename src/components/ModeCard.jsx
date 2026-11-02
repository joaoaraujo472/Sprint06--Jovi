import { modeIconComponents } from './icons/ModeIcons.jsx'

export default function ModeCard({ modo, visitado = false, onSelecionar }) {
  const Icon = modeIconComponents[modo.id]

  return (
    <button
      type="button"
      className={`modo-card modo-${modo.id} ${visitado ? 'modo-card-visitado' : ''}`}
      onClick={() => onSelecionar(modo.id)}
    >
      {visitado && <span className="modo-card-check" aria-hidden="true">✓</span>}
      <Icon className="modo-icon" />
      <h3>{modo.tituloCurto}</h3>
    </button>
  )
}
