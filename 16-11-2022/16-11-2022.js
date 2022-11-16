let salario = 0
let numeroFilhos = 0
let mediaFilhos = 0
let contador = 0
let mediaSalario = 0
let maiorSalario = 0
let salarioMenorQue150 = 0

do {
    salario = parseInt(prompt(`Qual o seu salário ?`))
    numeroFilhos = parseInt(prompt(`Quantos filhos você tem ?`))
    contador++

    mediaSalario = mediaSalario + salario
    mediaFilhos = mediaFilhos + numeroFilhos
    if(salario > maiorSalario){
        maiorSalario = salario
    }
    

} while (salario >= 0);

mediaSalario = mediaSalario / contador
mediaFilhos = mediaFilhos / contador

console.log(`Média de salário da população: ${mediaSalario}`)
console.log(`Média de número de filhos: ${mediaFilhos}`)
console.log(`Maior salário dos habitantes: ${maiorSalario}`)
console.log(`Quantidade de pessoas entrevistadas: ${contador}`)