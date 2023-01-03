let modelo = []
let ano = []
let valor = []
let carroMaisCaro = 0
let carroMaisBarato = 0
let mediaValores = 0

for (let i = 0; i < 3; i++) {
    modelo[i] = prompt(`Qual o modelo do carro?`)
    ano[i] = prompt(`Qual o ano do carro?`)
    valor[i] = parseInt(prompt(`Qual o valor do carro?`))  

    if(valor[i] > carroMaisCaro){
        carroMaisCaro = valor[i]
    }

    mediaValores = mediaValores + valor
    
}

mediaValores = mediaValores / 3

console.log(`Carro mais caro: ${carroMaisCaro}`)
//console.log(`Carro mais barato: ${carroMaisBarato}`)
console.log(`Média de valores: ${mediaValores}`)
