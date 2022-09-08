const
  toggle = document.querySelector('#toggle'),
  nav = document.querySelector('header nav'),
  svg = document.querySelector('#toggle svg'),
  header = document.querySelector('header')

toggle.onclick = () => {
  nav.classList.toggle('smnone')
  header.classList.toggle('smheader')
  if (nav.classList.contains('smnone')) {
    svg.innerHTML = "<path d='M3.75 9h16.5m-16.5 6.75h16.5'/>"
  }
  else {
    svg.innerHTML = "<path d='M4.5 19.5l15-15m-15 0l15 15'/>"
  }
}