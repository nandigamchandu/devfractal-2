export const menuBurger = () => {
  const menuList = document.querySelectorAll('.menu-list-label')
  menuList.forEach(el => el.classList.toggle('is-active'))
}
