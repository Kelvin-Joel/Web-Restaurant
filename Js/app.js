const menu=document.getElementById('menu')
const btn_menu=document.querySelector('.btn_menu')
const icon=document.getElementById('icon')
const link=document.querySelectorAll('li a')
const header=document.getElementById('header')
btn_menu.addEventListener('click',()=>{
    if(menu.classList.contains('menu_oculto') && icon.classList.contains('fa-bars'))
    {
        menu.classList.replace('menu_oculto','mostrar_menu')
        icon.classList.replace('fa-bars','fa-times')
    }else{
        menu.classList.replace('mostrar_menu','menu_oculto')
        icon.classList.replace('fa-times','fa-bars')
    }
  /*   header.style.backgroundColor="#fff"
    menu.style.backgroundColor="#fff"
    btn_menu.style.color="#111"
    for(let i of link)
    {
        i.style.color="#111"
    } */
})


window.addEventListener('scroll',()=>{
   
        header.classList.toggle('ColorHeader',window.scrollY>0)
})