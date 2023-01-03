let numeroRomano = ["LVIII"]

verificarNumero(numeroRomano)

function verificarNumero (r){
    console.log(r)
    let L = 0
    let V = 0
    let I = 0
    let total = 0

    r.forEach(element => {
        console.log(element)
        if(element[0] === "L"){
            console.log('entrou')
            L = 50
        }
        if(element === "V"){
            V = 5
        }
        if(element === "I"){
            I = 1
        }
        
        total = L + V + I
        console.log(total)
   });
    

}