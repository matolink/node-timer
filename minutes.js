export function minutes(ms) {
  ms = ms * 60000
  setInterval(() => {
    console.log(Date.now(),'parate del asiento')
  }, ms)
}
