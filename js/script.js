const botaoPesquisar = document.querySelector('.iconSearch')
const fecharSearch = document.querySelector('.iconFecharSearch')
const menuDePesquisa = document.querySelector('.search-lateral')
const barSearch = document.querySelector('.barSearch')
const inputSearch = document.querySelector('#inputSearch')
const categories = document.querySelector('.categories')
const banner = document.querySelector('.banner')
const headMenuMobile = document.querySelector('.menu-mobile div')
const menuMobile = document.querySelector('.menu-mobile')

function activeMenu() {
  menuDePesquisa.classList.toggle('active-search')
}
botaoPesquisar.addEventListener('click', activeMenu)
fecharSearch.addEventListener('click', activeMenu)

inputSearch.addEventListener('focus', ()=>{barSearch.classList.toggle('isCLick')})
inputSearch.addEventListener('blur', ()=>{barSearch.classList.toggle('isCLick')})


let topTotal = 0
function alterMenuFixed() {
  if(banner.getBoundingClientRect().top < -10) {
    categories.classList.add('styleScrollFixed')
  }else {
    categories.classList.remove('styleScrollFixed')
    menuMobile.classList.remove('addBack')
  }

  let valueTop = banner.getBoundingClientRect().top
  if(valueTop > topTotal) {
    headMenuMobile.classList.remove('disable')
    topTotal = valueTop
  } else if (valueTop < topTotal) {
    headMenuMobile.classList.add('disable')
    menuMobile.classList.add('addBack')
    topTotal = valueTop
  }
}

window.addEventListener('scroll', alterMenuFixed)