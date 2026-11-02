// Logo oficial da Jovi — mesmo lockup usado no site institucional,
// para manter consistência visual entre o site e o app (protótipo).
export default function Logo({ className = '' }) {
  return (
    <svg viewBox="0 0 176 72" className={`marca-lockup ${className}`} role="img" aria-label="Jovi Smartphone">
      <rect width="176" height="72" rx="16" fill="var(--marca)" />
      <text
        x="88"
        y="41"
        fontFamily="'Lato', sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#ffffff"
        textAnchor="middle"
        letterSpacing="1"
      >
        JOVI
      </text>
      <text
        x="88"
        y="58"
        fontFamily="'Lato', sans-serif"
        fontWeight="700"
        fontSize="9"
        fill="#c3ccf5"
        textAnchor="middle"
        letterSpacing="3"
      >
        SMARTPHONE
      </text>
    </svg>
  )
}
