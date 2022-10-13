import { URL } from 'url'
const berimbau = new URL('./berimbau.mp3', import.meta.url).pathname
const maracas = new URL('./berimbau.mp3', import.meta.url).pathname
import player from 'play-sound'

// console.log(player())
export function playBerimbau() {
  player().play(berimbau, function (err) {
    if (err) throw err
  })
}

export function playMaracas() {
  player().play(maracas, function (err) {
    if (err) throw err
  })
}
