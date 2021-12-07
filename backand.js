let botaoSx = document.getElementById("sx0");
let botaoStd = document.getElementById("stnd");
let botaoC6 = document.getElementById("c60");
let botaoCll = document.getElementById("cll0");
let botaoCasa = document.getElementById("casa0");
let botaoCar = document.getElementById("car0");
let botaoTotal = document.getElementById("tols");




onload = function (){
    const toteldosintem = localStorage.getItem("contas")
    let total = document.getElementById("sub");
    total.innerHTML = toteldosintem ;

    const toteldosintem1 = localStorage.getItem("sx7")
    let total1 = document.getElementById("sx");
    total1.innerHTML = toteldosintem1;

    const toteldosintem2 = localStorage.getItem("std7")
    let total2 = document.getElementById("snt");
    total2.innerHTML = toteldosintem2;

    const toteldosintem3 = localStorage.getItem("cll7")
    let total3 = document.getElementById("cll");
    total3.innerHTML = toteldosintem3;

    const toteldosintem4 = localStorage.getItem("casa7")
    let total4 = document.getElementById("casa");
    total4.innerHTML = toteldosintem4;

    const toteldosintem5 = localStorage.getItem("car7")
    let total5 = document.getElementById("car");
    total5.innerHTML = toteldosintem5;

    const toteldosintem6 = localStorage.getItem("c67")
    let total6 = document.getElementById("c6");
    total6.innerHTML = toteldosintem6;

    
    



}

function calcular(){
  


  
    let sx = parseFloat(botaoSx.value);
    let santander = parseFloat(botaoStd.value);
    let c6bank = parseFloat(botaoC6.value);
    let celular = parseFloat(botaoCll.value);
    let home = parseFloat(botaoCasa.value);
    let carro = parseFloat(botaoCar.value);
    

    let subTotal = ( sx + santander + c6bank + celular + home + carro); 
    
   
    localStorage.setItem("contas", subTotal.toFixed(2).replace(".", ","))
    localStorage.setItem("sx7", sx)
    localStorage.setItem("std7", santander)
    localStorage.setItem("cll7", celular)
    localStorage.setItem("casa7", home)
    localStorage.setItem("car7", carro)
    localStorage.setItem("c67", c6bank) 

 
       

  
  

}



