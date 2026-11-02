import { useState } from 'react'
import CameraApp from './CameraApp.jsx'
import '../site/site.css'

const MENU = [
  { href: '#solucao', label: 'A Solução' },
  { href: '#publico-alvo', label: 'Público-Alvo' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#experimente', label: 'Experimente' },
  { href: '#modos', label: 'Galeria' },
  { href: '#equipe', label: 'Nossa Equipe' },
  { href: '#contato', label: 'Fala com a gente', destaque: true },
]

function LogoJovi({ tituloId }) {
  return (
    <svg viewBox="0 0 176 72" className="marca-lockup" role="img" aria-labelledby={tituloId}>
      <title id={tituloId}>Jovi Smartphone</title>
      <rect width="176" height="72" rx="16" />
      <text x="88" y="41" fontFamily="'Lato', sans-serif" fontWeight="900" fontSize="30" fill="#ffffff" textAnchor="middle" letterSpacing="1">
        JOVI
      </text>
      <text x="88" y="58" fontFamily="'Lato', sans-serif" fontWeight="700" fontSize="9" fill="#c3ccf5" textAnchor="middle" letterSpacing="3">
        SMARTPHONE
      </text>
    </svg>
  )
}

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [contato, setContato] = useState({ nome: '', email: '', mensagem: '' })
  const [confirmacao, setConfirmacao] = useState('')

  function fecharMenu() {
    setMenuAberto(false)
  }

  function handleEnviarContato(evento) {
    evento.preventDefault()
    setConfirmacao('✓ Mensagem registrada! Obrigado pelo contato.')
    setContato({ nome: '', email: '', mensagem: '' })
  }

  return (
    <>
      <a className="pular-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="cabecalho">
        <nav className="container navegacao" aria-label="Menu principal">
          <a href="#topo" className="marca" aria-label="Jovi — início">
            <LogoJovi tituloId="logoTitulo" />
          </a>

          <button
            className="botao-menu"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>

          <ul className={`menu ${menuAberto ? 'aberto' : ''}`}>
            {MENU.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={item.destaque ? 'menu-cta' : ''} onClick={fecharMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="conteudo">

        {/* HERO — abre "A Solução" */}
        <section className="hero" id="topo">
          <div className="container hero-grid">
            <div className="hero-texto">
              <div className="hero-tag">
                <span className="hero-tag-numero">9</span>
                modos escondidos no seu celular
              </div>

              <h1>O seu Jovi já sabe fotografar melhor. Ele só nunca teve a chance de te mostrar.</h1>

              <p>
                Esta é a nova interface guiada que criamos para a câmera do Jovi Smartphone: você escolhe uma
                situação — foto de comida, aula, noite, esporte — e ela te mostra exatamente o que muda na câmera
                e por quê, com a câmera de verdade do seu aparelho.
              </p>

              <a href="#experimente" className="botao botao-primario hero-cta">
                Experimentar agora
              </a>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="celular celular-tras">
                <img src="/assets/screens/modo-noturno.png" alt="" />
              </div>
              <div className="celular celular-frente">
                <img src="/assets/screens/03-modos-grid.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* A SOLUÇÃO */}
        <section className="secao" id="solucao">
          <div className="container historia-grid">
            <div className="historia-texto">
              <h2>Começou com uma pergunta boba</h2>
              <p>
                Por que quase ninguém usa os modos da câmera além do automático? A gente perguntou pra família,
                pra colega de sala, pra grupo do WhatsApp — e a resposta se repetia:{' '}
                <em>"eu nem sei pra que serve isso"</em>.
              </p>
              <p>
                Faz sentido. O celular entrega um monte de ícone bonito e espera que você adivinhe o resto.
                Retrato, Noturno, Macro, Ação... nomes que parecem óbvios até você tentar explicar o que cada
                um faz de verdade.
              </p>
              <p>
                Vale um adendo: a gente não criou o Jovi Smartphone — o aparelho já existe. O que criamos, dentro
                do Challenge da FIAP, foi esta experiência guiada de aprendizagem prática: a nova interface que
                ensina a usar os 9 modos de câmera fotografando de verdade, não lendo manual.
              </p>
            </div>

            <div className="dica-citacao">
              <p>
                Testamos cada modo com a câmera real do celular antes de escrever qualquer explicação. Se o
                texto diz que o Retrato desfoca o fundo, é porque a gente tirou a foto e viu desfocar.
              </p>
            </div>
          </div>
        </section>

        {/* PÚBLICO-ALVO */}
        <section className="secao secao-alt" id="publico-alvo">
          <div className="container">
            <h2 className="titulo-secao-simples">Pra quem é a Jovi</h2>
            <p className="subtitulo-secao">
              A solução foi pensada para quem usa a câmera do celular todo dia, mas nunca teve tempo (ou paciência)
              de aprender os modos manuais.
            </p>

            <div className="equipe-grid">
              <article className="integrante" style={{ '--cor-avatar': 'var(--automatico)' }}>
                <div className="integrante-avatar">🎓</div>
                <h3>Estudantes</h3>
                <span className="integrante-rm">Modo Estudante &amp; Documento</span>
                <p>Alunos que fotografam lousa, slide e material de aula e querem texto legível sem distorção.</p>
              </article>
              <article className="integrante" style={{ '--cor-avatar': 'var(--paisagem)' }}>
                <div className="integrante-avatar">👩‍🏫</div>
                <h3>Professores</h3>
                <span className="integrante-rm">Modo Documento &amp; Automático</span>
                <p>Quem precisa digitalizar prova, apostila ou anotação rapidamente, com boa nitidez de texto.</p>
              </article>
              <article className="integrante" style={{ '--cor-avatar': 'var(--comida)' }}>
                <div className="integrante-avatar">📱</div>
                <h3>Curiosos de celular</h3>
                <span className="integrante-rm">Todos os 9 modos</span>
                <p>Quem comprou um Jovi Smartphone recentemente e quer aproveitar os recursos de câmera de verdade.</p>
              </article>
              <article className="integrante" style={{ '--cor-avatar': 'var(--acao)' }}>
                <div className="integrante-avatar">🍔</div>
                <h3>Criadores de conteúdo</h3>
                <span className="integrante-rm">Comida, Retrato &amp; Ação</span>
                <p>Quem posta foto de prato, esporte ou passeio e quer resultado melhor sem editar depois.</p>
              </article>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="secao" id="como-funciona">
          <div className="container">
            <h2 className="titulo-secao-simples">Como funciona, na prática</h2>

            <ol className="passos">
              <li className="passo">
                <div className="passo-numero">1</div>
                <div className="celular celular-passo">
                  <img src="/assets/screens/01-login.png" alt="Tela de login da Jovi pedindo nome completo e RM do aluno ou professor." />
                </div>
                <h3>Entra com seu nome e RM</h3>
                <p>Sem senha, sem burocracia — só o essencial pra personalizar a experiência.</p>
              </li>

              <li className="passo">
                <div className="passo-numero">2</div>
                <div className="celular celular-passo">
                  <img src="/assets/screens/02-onboarding.png" alt="Tela de onboarding perguntando como o usuário mais utiliza a câmera, com opções como documentos, redes sociais e fotos de aula." />
                </div>
                <h3>Conta como você mais fotografa</h3>
                <p>Documento, aula, comida, paisagem... a Jovi usa isso só pra sugerir por onde começar.</p>
              </li>

              <li className="passo">
                <div className="passo-numero">3</div>
                <div className="celular celular-passo">
                  <img src="/assets/screens/03-modos-grid.png" alt="Grade com os nove modos de câmera disponíveis na Jovi, cada um com sua cor e ícone." />
                </div>
                <h3>Escolhe um modo pra explorar</h3>
                <p>Cada card já entrega uma pista visual: a cor e o ícone contam parte da história antes de você tocar.</p>
              </li>

              <li className="passo">
                <div className="passo-numero">4</div>
                <div className="celular celular-passo">
                  <img src="/assets/screens/modo-documento.png" alt="Tela explicando o Modo Documento, com cards de destaque sobre resolução, nitidez de texto e leitura, além de uma dica de uso." />
                </div>
                <h3>Entende, testa e compara</h3>
                <p>Explicação direta, dica prática e uma comparação de antes/depois com a câmera do seu próprio celular.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* EXPERIMENTE — o app React de verdade, rodando dentro do mockup */}
        <section className="secao secao-tinta" id="experimente">
          <div className="container bastidores-grid experimente-grid">
            <div>
              <h2>Experimente agora, de verdade</h2>
              <p>
                Isto não é print, é o próprio aplicativo em React rodando aqui dentro do site. Faça o login,
                escolha um modo e compare o antes/depois com a câmera do seu aparelho — seu progresso fica salvo
                neste navegador.
              </p>
              <p>
                É o mesmo componente que publicamos como aplicação independente: <code>Login → Onboarding →
                Grade de modos → Câmera</code>, agora encaixado no mockup de celular do site institucional.
              </p>
            </div>

            <div className="celular celular-vivo" aria-label="Aplicativo Jovi rodando ao vivo">
              <CameraApp />
            </div>
          </div>
        </section>

        {/* GALERIA DE MODOS */}
        <section className="secao" id="modos">
          <div className="container">
            <h2 className="titulo-secao-simples">Os 9 modos, direto do protótipo</h2>
            <p className="subtitulo-secao">
              Estas são telas reais da interface rodando — nada de mockup genérico. Passe o mouse (ou toque) em
              cada card pra ver a dica daquele modo.
            </p>

            <div className="galeria-mosaico">
              <article className="modo-tile tile-grande" style={{ '--cor-modo-fundo': '#3159ff' }}>
                <img src="/assets/screens/modo-automatico.png" alt="Tela do Modo Automático explicando ajuste de iluminação, foco e balanço de branco em tempo real." />
                <div className="modo-tile-info">
                  <h3>Automático</h3>
                  <p className="modo-tile-dica">Ideal pra quem não quer pensar em configuração nenhuma — a câmera ajusta tudo sozinha.</p>
                </div>
              </article>

              <article className="modo-tile tile-alta" style={{ '--cor-modo-fundo': '#a855f7' }}>
                <img src="/assets/screens/modo-retrato.png" alt="Tela do Modo Retrato explicando o desfoque de fundo com efeito bokeh." />
                <div className="modo-tile-info">
                  <h3>Retrato</h3>
                  <p className="modo-tile-dica">Fique entre 50 cm e 1,5 m do sujeito pro desfoque de fundo funcionar melhor.</p>
                </div>
              </article>

              <article className="modo-tile" style={{ '--cor-modo-fundo': '#00a85a' }}>
                <img src="/assets/screens/modo-paisagem.png" alt="Tela do Modo Paisagem explicando profundidade de campo e realce de cores naturais." />
                <div className="modo-tile-info">
                  <h3>Paisagem</h3>
                  <p className="modo-tile-dica">Hora dourada — logo após o nascer ou antes do pôr do sol — deixa as cores incríveis.</p>
                </div>
              </article>

              <article className="modo-tile" style={{ '--cor-modo-fundo': '#5b5aeb' }}>
                <img src="/assets/screens/modo-noturno.png" alt="Tela do Modo Noturno explicando múltiplas exposições e redução de ruído sem flash." />
                <div className="modo-tile-info">
                  <h3>Noturno</h3>
                  <p className="modo-tile-dica">Apoie o celular numa superfície — a câmera leva alguns segundos pra processar a cena.</p>
                </div>
              </article>

              <article className="modo-tile" style={{ '--cor-modo-fundo': '#ff8a1f' }}>
                <img src="/assets/screens/modo-comida.png" alt="Tela do Modo Comida explicando ajustes de saturação e temperatura de cor para pratos." />
                <div className="modo-tile-info">
                  <h3>Comida</h3>
                  <p className="modo-tile-dica">Fotografe de cima ou em 45° pra destacar a apresentação do prato — e esqueça o flash direto.</p>
                </div>
              </article>

              <article className="modo-tile tile-grande" style={{ '--cor-modo-fundo': '#ff3fa0' }}>
                <img src="/assets/screens/modo-macro.png" alt="Tela do modo Super Perto (macro) explicando foco próximo para pequenos detalhes." />
                <div className="modo-tile-info">
                  <h3>Super Perto</h3>
                  <p className="modo-tile-dica">Aproxime devagar e espere o foco travar — pequenos tremores borram a foto neste modo.</p>
                </div>
              </article>

              <article className="modo-tile" style={{ '--cor-modo-fundo': '#ff3b4d' }}>
                <img src="/assets/screens/modo-acao.png" alt="Tela do Modo Ação explicando obturador rápido e rastreamento de movimento." />
                <div className="modo-tile-info">
                  <h3>Ação</h3>
                  <p className="modo-tile-dica">Combine com boa iluminação — ambientes escuros comprometem a velocidade do obturador.</p>
                </div>
              </article>

              <article className="modo-tile tile-alta" style={{ '--cor-modo-fundo': '#0098c9' }}>
                <img src="/assets/screens/modo-estudante.png" alt="Tela do Modo Estudante explicando correção de perspectiva e contraste de texto para fotos de lousa." />
                <div className="modo-tile-info">
                  <h3>Estudante</h3>
                  <p className="modo-tile-dica">Fotografe o mais paralelo possível à superfície — a correção de perspectiva tem limite.</p>
                </div>
              </article>

              <article className="modo-tile" style={{ '--cor-modo-fundo': '#f2a90e' }}>
                <img src="/assets/screens/modo-documento.png" alt="Tela do Modo Documento explicando digitalização em alta resolução com leitura de texto por OCR." />
                <div className="modo-tile-info">
                  <h3>Documento</h3>
                  <p className="modo-tile-dica">O modo ainda lê o texto da foto automaticamente, direto na tela de scanner.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* BASTIDORES / TECH */}
        <section className="secao secao-tinta" id="bastidores">
          <div className="container bastidores-grid">
            <div>
              <h2>Por trás da Jovi</h2>
              <p>
                Essas telas não são ilustração — é o aplicativo rodando de verdade no navegador, com acesso à
                câmera do próprio aparelho e leitura de texto ao vivo no Modo Documento.
              </p>
              <p>
                O site institucional e o aplicativo de câmera são hoje um único projeto React: componentes
                funcionais, estrutura de pai para filho, dados salvos em <code>localStorage</code> (login e
                progresso) e cálculos com <code>Math</code> (percentual de progresso arredondado e sorteio da
                dica do dia).
              </p>
            </div>

            <ul className="pilhas-tech">
              <li><code>React 19 + Vite</code><span>componentes funcionais e hooks</span></li>
              <li><code>CSS Grid</code><span>layout das seções do site</span></li>
              <li><code>localStorage</code><span>login e progresso salvos no navegador</span></li>
              <li><code>Math.round / Math.random</code><span>progresso e dica do dia</span></li>
              <li><code>getUserMedia()</code><span>acesso à câmera real</span></li>
              <li><code>Tesseract.js</code><span>OCR no Modo Documento</span></li>
            </ul>
          </div>
        </section>

        {/* EQUIPE */}
        <section className="secao secao-alt" id="equipe">
          <div className="container">
            <h2 className="titulo-secao-simples">Quem fez essa experiência</h2>
            <p className="subtitulo-secao">Challenge FIAP — Front-End &amp; Desenvolvimento Web.</p>

            <div className="equipe-grid">
              <article className="integrante" style={{ '--cor-avatar': 'var(--automatico)' }}>
                <div className="integrante-avatar">EB</div>
                <h3>Enzo Borgo</h3>
                <span className="integrante-rm">RM 572529</span>
                <p>Pesquisa e experiência do usuário</p>
              </article>
              <article className="integrante" style={{ '--cor-avatar': 'var(--noturno)' }}>
                <div className="integrante-avatar">JA</div>
                <h3>João Araújo</h3>
                <span className="integrante-rm">RM 571420</span>
                <p>Front-end e responsividade</p>
              </article>
              <article className="integrante" style={{ '--cor-avatar': 'var(--documento)' }}>
                <div className="integrante-avatar">YP</div>
                <h3>Yannick Parreira</h3>
                <span className="integrante-rm">RM 572443</span>
                <p>Conteúdo e documentação</p>
              </article>
              <article className="integrante" style={{ '--cor-avatar': 'var(--paisagem)' }}>
                <div className="integrante-avatar">LS</div>
                <h3>Lucca Savoia</h3>
                <span className="integrante-rm">RM 569489</span>
                <p>Testes e validação</p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className="secao" id="contato">
          <div className="container contato-grid">
            <div>
              <h2>Fala com a gente</h2>
              <p>Dúvida, sugestão de modo novo ou só quer trocar uma ideia sobre o projeto? Manda uma mensagem.</p>
              <address>
                <span>📧 orbitalengine@fiap.com.br</span>
                <span>📍 FIAP — São Paulo, SP</span>
              </address>
            </div>

            <form onSubmit={handleEnviarContato}>
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                placeholder="Digite seu nome"
                required
                value={contato.nome}
                onChange={(e) => setContato((c) => ({ ...c, nome: e.target.value }))}
              />

              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
                value={contato.email}
                onChange={(e) => setContato((c) => ({ ...c, email: e.target.value }))}
              />

              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                rows="4"
                placeholder="Escreva sua mensagem"
                required
                value={contato.mensagem}
                onChange={(e) => setContato((c) => ({ ...c, mensagem: e.target.value }))}
              ></textarea>

              <button className="botao botao-primario" type="submit">Enviar mensagem</button>
              <p className="confirmacao" role="status">{confirmacao}</p>
            </form>
          </div>
        </section>

      </main>

      <footer className="rodape">
        <div className="container rodape-grid">
          <a href="#topo" className="marca marca-rodape" aria-label="Jovi — início">
            <LogoJovi tituloId="logoTituloRodape" />
          </a>
          <p>Challenge FIAP · Front-End e Desenvolvimento Web, 2026 — interface criada pela nossa equipe para o Jovi Smartphone.</p>
        </div>
      </footer>
    </>
  )
}
