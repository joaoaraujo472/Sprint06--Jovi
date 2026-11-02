import { IconRelogio } from '../icons/ModeIcons.jsx'

export default function SlideQuando({ modo, ativo }) {
  return (
    <div className={`slide ${ativo ? 'active' : ''}`}>
      <div className="slide-content">
        <div className="slide-icone-topo quando-icone">
          <IconRelogio />
        </div>

        <h3>Quando usar</h3>
        <p>{modo.quando}</p>

        <ul className="situacoes-lista">
          {modo.situacoes.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="aviso-box">⚠️ {modo.aviso}</div>
      </div>
    </div>
  )
}
