let f1 = 1
let f2 = 1
const fib = 7
let somaf = 0

for(let i=3;i<=fib;i++){
    somaf = f1 + f2
    f1 = f2
    f2 = somaf
}
let result = 0
if(fib <3){
    result = 1
}else {
    result = somaf
}

console.log(result)






