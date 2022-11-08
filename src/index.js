import { mainPage } from './pages/mainPage'
import { registerPage } from './pages/registerPage'
import renderDOM from './utils/renderDOM'
import { profilePage } from './pages/profilePage'
import { messagePage } from './pages/messagePage'

window.addEventListener('DOMContentLoaded', () => {
  const { href } = window.location

  if (href.includes('register')) {
    renderDOM('#root', registerPage)
  } else if (href.includes('profile')) {
    renderDOM('#root', profilePage)
  } else if (href.includes('message')) {
    renderDOM('#root', messagePage)
  } else {
    renderDOM('#root', mainPage)
  }
})
