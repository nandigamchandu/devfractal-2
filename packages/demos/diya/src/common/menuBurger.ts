export const menuBurger = () => {
  const menuListHide = document.querySelectorAll('.is-hidden-touch')
  menuListHide.forEach(el => (el.className = 'menu-show'))
  if (menuListHide.length === 0) {
    const menuListShow = document.querySelectorAll('.menu-show')
    menuListShow.forEach(el => (el.className = 'is-hidden-touch'))
  }
}
