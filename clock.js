const minEl = document.querySelector('.minutes')
const secEl = document.querySelector('.hours')
const hrEl = document.querySelector('.seconds')





setInterval(() => {
    const date = new Date
const minDeg = date.getMinutes()/60 * 360 - 90;
const hourDeg = date.getHours()/12 * 360 - 90;
const secDeg = date.getSeconds()/60 * 360 - 90;
    secEl.style.transform =`rotate(${secDeg}deg)`;
     
    minEl.style.transform =`rotate(${minDeg}deg)`; 
    hrEl.style.transform =`rotate(${hourDeg}deg)`; 
}, 1000);