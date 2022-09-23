const button = document.getElementById('botao')
button.addEventListener('click', converter)

const input = document.getElementById('dados')
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    converter()
  }
})


function converter () {
  let dadosST = document.getElementById('dados').value
  let dadosN = Number(dadosST)
  const conversao = dadosN * 1.8 + 32

  let resultado = document.getElementById('resultado')
  resultado.innerText = `${dadosN} graus Celsius equivalem a: ${conversao.toFixed(2)} graus Farenheit`
}