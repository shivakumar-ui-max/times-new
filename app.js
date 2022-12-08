let hr = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

setInterval(() => {
              let date = new Date();
              let seconds = date.getSeconds();
              let secondsDegree = ((seconds / 60) * 360) - 90;
              sec.style.transform = `rotate(${secondsDegree}deg)`;

              let minutes = date.getMinutes();
              let minutesDegree = ((minutes / 60) * 360) - 90;
              min.style.transform = `rotate(${minutesDegree}deg)`;

              let hour = date.getHours();
              let hoursDegree = ((hour / 12) * 360) - 90;
              hr.style.transform = `rotate(${hoursDegree}deg)`;

}, 1000);