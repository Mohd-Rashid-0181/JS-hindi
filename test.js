const para = document.querySelector('.para')
const btn = document.querySelector('#btn')


btn.addEventListener('click', ()=>{
    para.innerHTML = Math.floor(Math.random()*1000 + 1)
})