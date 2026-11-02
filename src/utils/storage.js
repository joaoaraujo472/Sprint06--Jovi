// Funções utilitárias de armazenamento local (localStorage) e de
// operações matemáticas usadas na experiência da câmera.
//
// Tudo aqui é "vanilla JS" de propósito: são as duas funcionalidades
// pedidas na entrega (localStorage + Math) e ficam centralizadas neste
// arquivo para não se repetir dentro dos componentes.

const CHAVE_USUARIO = 'jovi:usuario'
const CHAVE_MODOS_VISITADOS = 'jovi:modosVisitados'

/** Lê o usuário salvo (nome, rm, preferências) ou null se nunca logou. */
export function carregarUsuario() {
  try {
    const bruto = window.localStorage.getItem(CHAVE_USUARIO)
    return bruto ? JSON.parse(bruto) : null
  } catch {
    return null
  }
}

/** Salva/atualiza os dados do usuário logado. */
export function salvarUsuario(usuario) {
  try {
    window.localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario))
  } catch {
    // localStorage indisponível (modo privado, etc.) — app continua
    // funcionando normalmente, só sem persistência entre sessões.
  }
}

/** Remove o usuário salvo (logout). */
export function limparUsuario() {
  try {
    window.localStorage.removeItem(CHAVE_USUARIO)
    window.localStorage.removeItem(CHAVE_MODOS_VISITADOS)
  } catch {
    /* noop */
  }
}

/** Lê a lista de ids de modos já explorados pelo usuário. */
export function carregarModosVisitados() {
  try {
    const bruto = window.localStorage.getItem(CHAVE_MODOS_VISITADOS)
    return bruto ? JSON.parse(bruto) : []
  } catch {
    return []
  }
}

/** Marca um modo como visitado (sem duplicar) e devolve a lista atualizada. */
export function registrarModoVisitado(idModo) {
  const atuais = carregarModosVisitados()
  if (atuais.includes(idModo)) return atuais

  const atualizados = [...atuais, idModo]
  try {
    window.localStorage.setItem(CHAVE_MODOS_VISITADOS, JSON.stringify(atualizados))
  } catch {
    /* noop */
  }
  return atualizados
}

/**
 * Calcula o percentual de progresso já explorado pelo usuário,
 * arredondado para um número inteiro (Math.round) — usado no cabeçalho
 * da grade de modos ("você já explorou 33% dos modos").
 */
export function calcularProgresso(quantidadeVisitada, quantidadeTotal) {
  if (quantidadeTotal <= 0) return 0
  const percentual = (quantidadeVisitada / quantidadeTotal) * 100
  return Math.round(percentual)
}

/**
 * Sorteia um item aleatório de uma lista usando Math.random() +
 * Math.floor — usado para escolher a "dica do dia" que aparece na
 * grade de modos.
 */
export function sortearItem(lista) {
  if (!lista || lista.length === 0) return null
  const indiceAleatorio = Math.floor(Math.random() * lista.length)
  return lista[indiceAleatorio]
}
