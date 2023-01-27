// OLÁ MUNDDO

let input = [1,0,0,0,1], n = 1

let output = false

input.forEach((e, index) => {
    console.log(e)
    console.log(index)
    if(e[index] === 0 && e[index + 1] === 0 && e[index + 2] === 0){
        n = n - 1
    }
})

console.log(n)

if(n === 0){
    output === true
}

console.log(output)

