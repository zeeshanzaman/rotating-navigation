const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelectorAll('.container')

open.addEventListner('click'), () => container.classList.add('show-nav')

close.addEventListner('click'), () => container.classList.add('show-nav')