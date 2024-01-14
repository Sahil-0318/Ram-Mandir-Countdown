
const enddate = "22 January 2024"
document.querySelector('#title span').innerText = enddate;

function clock() {
    const end = new Date(enddate);
    const now = new Date();
    // console.log(end);
    // console.log(now);

    const diff = (end - now) / 1000;
    // console.log(diff);

    if (diff >= 0) {

        // converted into days
        const days = Math.floor(diff / 3600 / 24);
        document.querySelector('#days').innerText = days;
        // console.log(days);

        // converted into hours
        const hours = Math.floor((diff / 3600) % 24);
        document.querySelector('#hours').innerText = hours;
        // console.log(hours);

        // converted into minutes
        const minutes = Math.floor((diff / 60) % 60);
        document.querySelector('#minutes').innerText = minutes;
        // console.log(minutes);

        // converted into seconds
        const seconds = Math.floor((diff) % 60);
        document.querySelector('#seconds').innerText = seconds;
        // console.log(seconds);
    }
}

setInterval(() => {
    clock()
}, 1000)

