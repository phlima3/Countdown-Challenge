let countdown = setInterval(function () {
  const countDownDate = new Date("Sep 10, 2023 19:37:00").getTime();

  const now = new Date().getTime();

  const timeRemaining = countDownDate - now;

 
  var textDay = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var textHour = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var textMinute = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var textSecond = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.querySelector(".day").innerHTML = textDay + ":";
  document.querySelector(".hour").innerHTML = textHour.toString().padStart(2, '0') + ":";
  document.querySelector(".minute").innerHTML = textMinute.toString().padStart(2, '0')  + ":";
  document.querySelector(".second").innerHTML = textSecond.toString().padStart(2, '0')  

  if (timeRemaining < 0) {
    clearInterval(countdown);
    alert('Time expired!')
  }


  console.log(countDownDate)
}, 1000);
