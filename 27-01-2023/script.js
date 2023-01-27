// OLÁ MUNDDO

let input = [1,0,0,0,1], n = 2
let array = []

let output = false

input.forEach((e, index) => {
   
    if(e === 0){
        array.push(e)
    }

    if(array.length === 2){
        n = n - 1
    }
})

console.log("Numero de flores que restaram plantar:" + n)

if(n === 0){
    output = true
}

console.log(output)



