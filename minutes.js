export function minutes(ms) {
    console.log('timer started!')
    ms = ms * 60000;
    setInterval(() => {
        let date_ob = new Date();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        console.log(`[${hours}:${minutes}] párate del asiento`);
    }, ms);
}
