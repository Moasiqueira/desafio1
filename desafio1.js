// Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. ,
 //em que temos que obter as 3 notas de um aluno, calcular a média e exibir se o aluno foi aprovado (7), 
 //reprovado() ou se ficou para exame. Não é necessário ler as notas, você pode defini-las com variáveis.
// Você precisará utilizar uma estrutura de decisão composta, como a seguir:

//if (condicao1) {
    // código da condição 1
//} else if (condicao2) {
    // código da condição 2
//} else {
    // código se nenhuma das condições for verdadeira
//}

const nomeAluno = "Monique"

const nota1 = 6.5
const nota2 = 8.4
const nota3 = 4.0

const calcMedia = (nota1 + nota2 + nota3) / 3


if(calcMedia >= 7) {
    console.log("Parabéns, aprovado")
}

 else if(calcMedia <= 4) {
    console.log("voçê foi reprovado")
}

else{
    console.log("Exame")

}

