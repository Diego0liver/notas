const abreMenu =() => document.getElementById('modal-form')
.classList.add('active')

const fechaMenu =() =>{
    
    document.getElementById('modal-form')
.classList.remove('active')}


document.getElementById('bt2')
.addEventListener('click', abreMenu )

document.getElementById('fecha')
.addEventListener('click', fechaMenu)



 



