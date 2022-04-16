const $ = document.querySelector.bind(document)
const header = $('.header .container')
function scrollFunc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add('scroll')
    }
    else {
        header.classList.remove('scroll')
    }
}
window.onscroll = scrollFunc