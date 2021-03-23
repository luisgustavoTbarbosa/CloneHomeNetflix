const botaoPesquisar = document.querySelector('.iconSearch')
const fecharSearch = document.querySelector('.iconFecharSearch')
const menuDePesquisa = document.querySelector('.search-lateral')
const barSearch = document.querySelector('.barSearch')
const inputSearch = document.querySelector('#inputSearch')

const MenuPesquisa = {
  activeMenu() {
    menuDePesquisa.classList.toggle('active-search')
  }
}

botaoPesquisar.addEventListener('click', MenuPesquisa.activeMenu)
fecharSearch.addEventListener('click', MenuPesquisa.activeMenu)
inputSearch.addEventListener('focus', ()=>{barSearch.classList.toggle('isCLick')})
inputSearch.addEventListener('blur', ()=>{barSearch.classList.toggle('isCLick')})