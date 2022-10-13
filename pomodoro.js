import { playBerimbau, playMaracas } from './sound.js'
export function pomodoro() {
  console.log('pomodoro started!')
  // let ms = 5000
  // let mb = 1000
  let ms = 25 * 60000
  let mb = 5 * 60000
  setInterval(() => {
    let date_ob = new Date()
    let hours = date_ob.getHours()
    let minutes = date_ob.getMinutes()
    console.log(`[${hours}:${minutes}] Descanso`)
    playBerimbau()
    setTimeout(() => {
      let date_ob = new Date()
      let hours = date_ob.getHours()
      let minutes = date_ob.getMinutes()
      console.log(`[${hours}:${minutes}] A trabajar!`)
    playMaracas()
    }, mb)
  }, ms)
}
