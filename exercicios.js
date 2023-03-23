// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Digite a altura")
  const largura = prompt("Digite a largura")
  console.log(altura*largura)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual")
  const nascimento = prompt("Digite seu ano de nascimento")
  const idade = anoAtual - nascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura*altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua cor favorita?")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt("Digite sua terceira cor favorita")
  const cores = [cor1,cor2,cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const semPrejuizo = custo/valorIngresso
  return semPrejuizo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const lenstring1 = string1.length
  const lenstring2 = string2.length
  return lenstring1==lenstring2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = (array.length)-1
  return array[ultimo]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  const ultimo = array[(array.length)-1]
  array[0]= ultimo
  array[(array.length)-1]=primeiro
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const s1 = string1.toUpperCase()
  const s2 = string2.toUpperCase()
  return s1===s2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("ano atual"))
  const nascimento = Number(prompt("ano nascimento"))
  const anoEmissao = Number(prompt("emissao"))

  const idade = anoAtual - nascimento
  const tempoEmitido = anoAtual-anoEmissao

  const condiçao1 = idade<=20 && tempoEmitido>=5
  const condiçao2 = (idade>20 && idade<=50) && tempoEmitido>=10
  const condiçao3 = idade>50 && tempoEmitido>=15
  const renovar = condiçao1 || condiçao2 || condiçao3
  console.log(renovar)
}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multi400 = ano%400===0
  const multi4 = ano%4===0 && ano%100!==0
  const bissexto = multi400 || multi4
  return bissexto
}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt(`Você tem mais de 18 anos?`)
  const ensino = prompt(`Você possui ensino médio completo?`)
  const disponibilidade = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)

  const id = idade === "sim"
  const en = ensino === "sim"
  const di = disponibilidade ==="sim"
  
  console.log( id && en && di)
}