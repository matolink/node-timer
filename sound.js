import { URL } from 'url'
const soundPath = new URL('./berimbau.mp3', import.meta.url).pathname
import player from 'play-sound'

// console.log(player())
export function playBerimbau() {
  player().play(soundPath, function (err) {
    if (err) throw err
  })
}
