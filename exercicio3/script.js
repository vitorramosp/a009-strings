//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair`
console.log(frase)
const frase02 = frase.replace("verde","rosa").replace("azul","laranja")
console.log(frase02)

const res01=frase02.includes("verde")
const res02=frase02.includes("laranja")
const somafrase = res01 && res02
console.log(somafrase)