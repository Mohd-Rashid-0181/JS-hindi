const para = document.querySelector('.para')
const btn = document.querySelector('#btn')


btn.addEventListener('click', ()=>{
    para.innerHTML = Math.floor(Math.random()*1000 + 1)
})

// file does not directly access through program. first we have access of curnal after that curnal bring the to us means accessing of is depend on the curnal.

// async await does not handles errors directly 