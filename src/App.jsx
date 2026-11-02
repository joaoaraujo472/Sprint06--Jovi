import Home from './components/Home.jsx'

// Projeto unificado: o site institucional (landing page) e o app React
// da câmera inteligente agora vivem no mesmo projeto Vite. O App.jsx
// só renderiza o site — o app de câmera é montado dentro dele, na seção
// "Experimente agora" (ver src/components/Home.jsx e CameraApp.jsx).
function App() {
  return <Home />
}

export default App
