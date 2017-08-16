let VidaPikachu = 100
let vidaCharmander = 100

const min_power = 5
const max_power = 12

const ambosSiguenVivos = () => VidaPikachu > 0 && vidaCharmander > 0

const calcularGolpe = () => Math.round(Math.random() * (max_power - min_power) + min_power)

const PikachuSigueVivo = () => VidaPikachu > 0

let round = 0

while(ambosSiguenVivos()) {
  round++
  alert(`Round: ${round}`)

  const golpePikachu = calcularGolpe()
  const golpeCharmander = calcularGolpe()

  if (golpePikachu > golpeCharmander) {
    alert(`Pikachu ataca a charmander con un golpe de ${golpePikachu}`)
    vidaCharmander -= golpePikachu
    alert(`La vida de charmander queda en ${vidaCharmander} puntos de vida`)
  }
  else {
    alert(`Charmander ataca a Pickachu con un golpe de ${golpeCharmander}`)
    VidaPikachu -= golpeCharmander
    alert(`Vida de Pikachu queda en ${VidaPikachu} puntos de vida`)
  }
}

if(PikachuSigueVivo()){
  alert(`Pikachu gana la pelea`)
}
else {
  alert(`Charmander gana la pelea`)
}
