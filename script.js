const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const ampmEl = document.getElementById('ampm')


function Clock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    // let am_pm = 'AM'

    // if (h == 0) {
    //     h = 12


    // }
    // if (h > 12) {
    //     h = h - 12
    //     am_pm = 'PM'
    // }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hourEl.innerText = h;

    minuteEl.innerText = m;
    secondEl.innerText = s;

    // ampmEl.innerText = am_pm

    setTimeout(() => {
        Clock()

    }, 1000)
}

Clock()