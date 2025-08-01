const menuDiv = document.getElementById('menu-mobile')
const btnAnimation = document.getElementById('btn-menu')

menuDiv.addEventListener('click', menuAnimation)
function menuAnimation(){
    menuDiv.classList.toggle('open')
    btnAnimation.classList.toggle('active')
}