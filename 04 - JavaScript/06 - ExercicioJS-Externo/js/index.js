let olderName = prompt("Qual o nome da pessoa mais velha?")
let olderAge = prompt("Qual a idade da pessoa mais velha?")

let youngName = prompt("Qual o nome da pessoa mais nova?")
let youngAge = prompt("Qual a idade da pessoa mais nova?")

let dif = olderAge-youngAge

alert("Pessoa mais velha:\n" + "Nome: " + olderName + "\nIdade: " + olderAge + "\nPessoa mais nova:\n"+ 
"Nome: " + youngName + "\nIdade: " + youngAge + "\n\nA diferença de idade é de: " + dif + " anos")