import { modeIconComponents } from '../icons/ModeIcons.jsx'

export default function SlideInfo({ modo, ativo }) {
  const Icon = modeIconComponents[modo.id]

  return (
    <div className={`slide ${ativo ? 'active' : ''}`}>
      <div className="slide-content">
        <div className="slide-icone-topo">
          <Icon />
        </div>

        <h3>{modo.titulo}</h3>
        <p>{modo.descricao}</p>

        <div className="info-cards-grid">
          {modo.cards.map((card) => (
            <div className="info-card-item" key={card.label}>
              <span className="card-icon">{card.icon}</span>
              <span className="card-label">{card.label}</span>
              <span className="card-valor">{card.valor}</span>
            </div>
          ))}
        </div>

        <div className="dica-box">💡 {modo.dica}</div>
      </div>
    </div>
  )
}
