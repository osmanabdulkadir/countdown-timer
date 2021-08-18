var countDownDate = new Date("Feb 17, 2022 17:00:25").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    //time calculations for days, hours minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
    var mintues = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "D " + hours + "H " + mintues + "m " + seconds + 's ';
})