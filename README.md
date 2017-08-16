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
  console.log(`Round: ${round}`)

  const golpePikachu = calcularGolpe()
  const golpeCharmander = calcularGolpe()

  if (golpePikachu > golpeCharmander) {
    console.log(`Pikachu ataca a charmander con un golpe de ${golpePikachu}`)
    vidaCharmander -= golpePikachu
    console.log(`La vida de charmander queda en ${vidaCharmander} puntos de vida`)
  }
  else {
    console.log(`Charmander ataca a Pickachu con un golpe de ${golpeCharmander}`)
    VidaPikachu -= golpeCharmander
    console.log(`Vida de Pikachu queda en ${VidaPikachu} puntos de vida`)
  }
}

if(PikachuSigueVivo()){
  console.log(`Pikachu gana la pelea`)
}
else {
  console.log(`Charmander gana la pelea`)
}
