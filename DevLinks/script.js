function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver lightmode adicionar a imagem light
    img.setAttribute("src", "./assets/avatarlight.png")
    img.setAttribute("alt", "Foto de cintia maas perfil, fundo roxo")
  } else {
    // se tiver sem lightmode manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de cintia maas perfil, fundo branco")
  }
}
