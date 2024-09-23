const menu = document.getElementById('menu')
const close = document.getElementById('close')
const menuList = document.getElementById('nav')

menu.addEventListener('click', ()=>{
    menuList.style.display = "flex"
});
// close.addEventListener("click", () => {
//     menuList.style.display = "none"
// })
function closeMenu() {
    menuList.style.display = "none"
}
close.addEventListener("click", closeMenu)