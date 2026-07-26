export function getFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos')) || []
}

export function toggleFavorito(id) {
  const favoritos = getFavoritos()

  if (favoritos.includes(id)) {
    // desfavoritar
    const novos = favoritos.filter(f => f !== id)
    localStorage.setItem('favoritos', JSON.stringify(novos))
    return false
  } else {
    // favoritar
    favoritos.push(id)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
    return true
  }
}

export function isFavorito(id) {
  return getFavoritos().includes(id)
}