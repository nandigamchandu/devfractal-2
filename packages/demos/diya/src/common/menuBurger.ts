export const menuBurger = () => {
  const menuListHide = document.querySelectorAll('.is-hidden-touch')
  // @TODO: fix tslint error
  // tslint:disable-next-line:no-object-mutation
  menuListHide.forEach(el => (el.className = 'menu-show'))
  if (menuListHide.length === 0) {
    const menuListShow = document.querySelectorAll('.menu-show')
    // tslint:disable-next-line:no-object-mutation
    menuListShow.forEach(el => (el.className = 'is-hidden-touch'))
  }
}
