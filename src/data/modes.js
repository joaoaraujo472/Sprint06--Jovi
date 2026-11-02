// Dados de cada modo de câmera da Jovi.
// Conteúdo migrado 1:1 do protótipo original (src/js/script.js),
// mantendo textos, dicas e avisos como estavam.

export const modesOrder = [
  'automatico',
  'retrato',
  'paisagem',
  'noturno',
  'comida',
  'macro',
  'acao',
  'estudante',
  'documento',
]

export const modes = {
  automatico: {
    id: 'automatico',
    titulo: 'Modo Automático',
    tituloCurto: 'Automático',
    descricao:
      'A câmera analisa a cena em tempo real e ajusta automaticamente iluminação, foco, balanço de branco e exposição para entregar a melhor foto possível.',
    cards: [
      { icon: '🎯', label: 'Foco', valor: 'Automático' },
      { icon: '☀️', label: 'Luz', valor: 'Balanceada' },
      { icon: '⚡', label: 'Velocidade', valor: 'Instantânea' },
    ],
    dica: 'Ideal para quem está começando ou não quer se preocupar com configurações técnicas.',
    quando:
      'Perfeito para situações do dia a dia em que você precisa de uma foto rápida e boa sem ajustes manuais.',
    situacoes: [
      'Momentos espontâneos e imprevistos',
      'Ambientes com boa iluminação natural',
      'Fotos casuais com amigos e família',
      'Quando não há tempo para configurar',
    ],
    aviso: 'Em ambientes com pouca luz, prefira o Modo Noturno para melhores resultados.',
    feedbackDepois: 'Modo Automático ativo! Luz e cores equilibradas automaticamente.',
    filtro: 'brightness(1.1) contrast(1.05)',
  },
  retrato: {
    id: 'retrato',
    titulo: 'Modo Retrato',
    tituloCurto: 'Retrato',
    descricao:
      'Usa inteligência artificial para identificar o rosto e aplicar desfoque progressivo no fundo, criando um efeito bokeh profissional.',
    cards: [
      { icon: '👁️', label: 'IA facial', valor: 'Ativada' },
      { icon: '🌫️', label: 'Bokeh', valor: 'Simulado' },
      { icon: '✨', label: 'Pele', valor: 'Suavizada' },
    ],
    dica: 'Mantenha entre 50cm e 1,5m de distância do sujeito para o melhor efeito de desfoque.',
    quando: 'Ideal para destacar pessoas, pets ou qualquer objeto que mereça ser o centro das atenções.',
    situacoes: [
      'Selfies e fotos de perfil',
      'Fotos de pets e animais',
      'Retratos formais e informais',
      'Fotografar objetos com fundo bagunçado',
    ],
    aviso: 'O efeito de desfoque é simulado por software — funciona melhor com fundos distantes.',
    feedbackDepois: 'Retrato ativado! Fundo desfocado para destacar o sujeito da foto.',
    filtro: 'brightness(1.05) contrast(1.1)',
  },
  paisagem: {
    id: 'paisagem',
    titulo: 'Modo Paisagem',
    tituloCurto: 'Paisagem',
    descricao:
      'Aumenta o campo de profundidade para que toda a cena fique nítida. Realça contraste e saturação de cores naturais.',
    cards: [
      { icon: '🔭', label: 'Profundidade', valor: 'Total' },
      { icon: '🎨', label: 'Cores', valor: 'Vibrantes' },
      { icon: '🏔️', label: 'Nitidez', valor: 'Máxima' },
    ],
    dica: 'Fotografe no horário dourado (1h após o nascer ou antes do pôr do sol) para cores incríveis.',
    quando: 'Perfeito para capturar cenas amplas onde você quer que todos os detalhes apareçam com nitidez.',
    situacoes: [
      'Natureza, montanhas e cachoeiras',
      'Cidades e skylines urbanos',
      'Praias, campos e florestas',
      'Fotos de viagem e turismo',
    ],
    aviso: 'Não é ideal para sujeitos em movimento — o foco amplo pode não acompanhar objetos rápidos.',
    feedbackDepois: 'Paisagem ativa! Nitidez, contraste e cores vivas em toda a cena.',
    filtro: 'contrast(1.2) saturate(1.3)',
  },
  noturno: {
    id: 'noturno',
    titulo: 'Modo Noturno',
    tituloCurto: 'Noturno',
    descricao:
      'Combina múltiplas exposições e aplica IA para reduzir ruído, clareando a cena sem usar flash e preservando as cores reais da noite.',
    cards: [
      { icon: '📸', label: 'Exposições', valor: 'Múltiplas' },
      { icon: '🔕', label: 'Flash', valor: 'Desligado' },
      { icon: '🌃', label: 'Ruído', valor: 'Reduzido' },
    ],
    dica: 'Apoie o celular em uma superfície ou use as duas mãos para evitar tremido durante a captura.',
    quando: 'Essencial para fotografar em ambientes com pouca ou nenhuma luz artificial disponível.',
    situacoes: [
      'Fotos noturnas de ruas e cidades',
      'Ambientes internos com luz baixa',
      'Festas e eventos com iluminação fraca',
      'Céu estrelado e paisagens noturnas',
    ],
    aviso: 'A câmera leva alguns segundos para processar — mantenha o celular firme durante a captura.',
    feedbackDepois: 'Modo Noturno ativo! Mais luz coletada e ruído reduzido na cena.',
    filtro: 'brightness(1.6) contrast(0.9)',
  },
  comida: {
    id: 'comida',
    titulo: 'Modo Comida',
    tituloCurto: 'Comida',
    descricao:
      'Ajusta saturação, temperatura de cor e nitidez de texturas para realçar o apelo visual dos alimentos, tornando as cores mais quentes e vibrantes.',
    cards: [
      { icon: '🎨', label: 'Saturação', valor: 'Alta' },
      { icon: '🌡️', label: 'Tom', valor: 'Quente' },
      { icon: '🔍', label: 'Textura', valor: 'Realçada' },
    ],
    dica: 'Fotografe de cima (vista superior) ou em 45 graus para destacar a apresentação do prato.',
    quando: 'Perfeito para registrar refeições bonitas e compartilhar nas redes sociais com impacto visual.',
    situacoes: [
      'Pratos de restaurantes e cafés',
      'Receitas feitas em casa',
      'Bebidas e sobremesas',
      'Conteúdo para redes sociais',
    ],
    aviso: 'Evite usar flash direto — ele deixa a comida com aparência artificial.',
    feedbackDepois: 'Modo Comida ativo! Cores saturadas e quentes, texturas em destaque.',
    filtro: 'saturate(1.8) brightness(1.1)',
  },
  macro: {
    id: 'macro',
    titulo: 'Super Perto',
    tituloCurto: 'Super Perto',
    descricao:
      'Ativa o modo de foco próximo para capturar detalhes invisíveis a olho nu com nitidez extrema em objetos muito pequenos.',
    cards: [
      { icon: '📏', label: 'Distância', valor: '2 a 10cm' },
      { icon: '🔬', label: 'Detalhe', valor: 'Extremo' },
      { icon: '💡', label: 'Foco', valor: 'Manual/Auto' },
    ],
    dica: 'Aproxime devagar e espere o foco travar antes de fotografar — pequenos movimentos importam.',
    quando: 'Ideal para revelar a beleza e complexidade de coisas pequenas que normalmente passam despercebidas.',
    situacoes: [
      'Flores, folhas e insetos',
      'Texturas de superfícies e tecidos',
      'Detalhes de joias e objetos',
      'Fotografia científica e educacional',
    ],
    aviso: 'Profundidade de campo muito rasa — qualquer tremido borra a foto. Use apoio se possível.',
    feedbackDepois: 'Macro ativo! Detalhes minúsculos agora nítidos e visíveis na foto.',
    filtro: 'contrast(1.3) saturate(1.1)',
  },
  acao: {
    id: 'acao',
    titulo: 'Modo Ação',
    tituloCurto: 'Ação',
    descricao:
      'Aumenta a velocidade do obturador ao máximo e ativa rastreamento de movimento para congelar cenas rápidas com nitidez total.',
    cards: [
      { icon: '⚡', label: 'Obturador', valor: 'Ultrarrápido' },
      { icon: '🎯', label: 'Rastreamento', valor: 'Contínuo' },
      { icon: '📷', label: 'Rajada', valor: 'Disponível' },
    ],
    dica: 'Mantenha o dedo pressionado para ativar o modo rajada e não perder o momento exato.',
    quando: 'Essencial para qualquer situação em que o sujeito está se movendo rapidamente.',
    situacoes: [
      'Esportes e competições',
      'Crianças e pets brincando',
      'Carros, motos e ciclistas',
      'Dança e movimentos artísticos',
    ],
    aviso: 'Ambientes muito escuros podem comprometer a velocidade — combine com boa iluminação.',
    feedbackDepois: 'Modo Ação ativo! Movimento congelado sem desfoque na imagem.',
    filtro: 'contrast(1.15) brightness(1.05)',
  },
  estudante: {
    id: 'estudante',
    titulo: 'Modo Estudante',
    tituloCurto: 'Estudante',
    descricao:
      'Aumenta contraste e nitidez de textos, corrige perspectiva de páginas e lousas fotografadas em ângulo, e remove sombras para leitura fácil.',
    cards: [
      { icon: '📝', label: 'Contraste', valor: 'Reforçado' },
      { icon: '📐', label: 'Perspectiva', valor: 'Corrigida' },
      { icon: '🌑', label: 'Sombras', valor: 'Removidas' },
    ],
    dica: 'Fotografe o mais paralelo possível à superfície — a correção de perspectiva tem limites.',
    quando: 'Perfeito para estudar e copiar conteúdo sem precisar transcrever tudo a mão.',
    situacoes: [
      'Lousas e quadros brancos em aula',
      'Páginas de livros e apostilas',
      'Slides e projeções',
      'Anotações e resumos de colegas',
    ],
    aviso: 'Garanta boa iluminação — reflexos nas superfícies podem dificultar a leitura.',
    feedbackDepois: 'Modo Estudante ativo! Texto nítido, contraste reforçado, sombras removidas.',
    filtro: 'grayscale(0.3) contrast(1.4)',
  },
  documento: {
    id: 'documento',
    titulo: 'Modo Documento',
    tituloCurto: 'Documento',
    descricao:
      'Combina captura de alta resolução com reconhecimento óptico de caracteres (OCR) para digitalizar documentos e extrair texto de forma editável.',
    cards: [
      { icon: '🔍', label: 'OCR', valor: 'Ativado' },
      { icon: '⬛', label: 'Filtro', valor: 'P&B Alto' },
      { icon: '📋', label: 'Texto', valor: 'Extraível' },
    ],
    dica: 'Use o slide Scanner (próximo) para extrair o texto do documento automaticamente.',
    quando: 'Essencial para digitalizar documentos físicos e tornar o conteúdo pesquisável e editável.',
    situacoes: [
      'Contratos e formulários impressos',
      'Recibos e notas fiscais',
      'Textos de livros para copiar trechos',
      'Documentos de identidade e certidões',
    ],
    aviso: 'O OCR funciona melhor com textos impressos nítidos — manuscritos têm precisão menor.',
    feedbackDepois: 'Documento ativo! Filtro P&B aplicado para máximo contraste na leitura.',
    filtro: 'grayscale(1) contrast(1.6)',
    temScanner: true,
  },
}

// Opções de uso mais frequente, exibidas no onboarding.
export const usosOnboarding = [
  { value: 'doc', label: 'Digitalizar Documentos', icon: '📄' },
  { value: 'social', label: 'Redes Sociais', icon: '📸' },
  { value: 'aula', label: 'Fotos de Lousa/Slides', icon: '📚' },
  { value: 'paisagem', label: 'Paisagens', icon: '🏔' },
  { value: 'acao', label: 'Esportes / Ação', icon: '🏃' },
  { value: 'comida', label: 'Comida', icon: '🍔' },
]

// Frequência de uso, também parte do onboarding
// (antes era um prompt() do navegador — agora é uma etapa real da UI).
export const frequenciasOnboarding = [
  { value: 'pouco', label: 'Pouco', hint: 'Só em ocasiões especiais' },
  { value: 'medio', label: 'Médio', hint: 'Algumas vezes por semana' },
  { value: 'muito', label: 'Muito', hint: 'Praticamente todo dia' },
]
