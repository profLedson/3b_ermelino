
// FUNÇÕES NOMEADAS
function logar(usuario, senha) {
    alert('Logado com a função nomeada!')
    alert('Olá, ' + usuario)
}
logar("ledson123", 12345)

// FUNÇÕES ANÔNIMAS
const conectar = function(usuario, senha){
    alert('Logado com a função anônima!')
    alert('Olá, ' + usuario)
}
conectar("Joilson", "13sdfs")

// ARROW FUNCTIONS OU FUNÇÕES FLECHA
const colorir = () => {
    alert("Função flecha em ação!")
 }
colorir() // execução da Arrow