const
  toggle = document.querySelector('.toggle'),
  nav = document.querySelector('nav'),
  calc = document.querySelector('#calc')

toggle.onclick = () => {
  nav.classList.toggle('smnone')
}