$(document).ready(() => {
    var finishTime = new Date("11/01/2019").getTime();
    var interval = setInterval(() => {
        let now = new Date().getTime();
        let dis = finishTime - now;

        var days = Math.floor(dis / (1000 * 60 * 60 * 24));
        var hours = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((dis % (1000 * 60)) / 1000);

        $("#day").text(days)
        $("#hours").text(hours)
        $("#min").text(minutes)
        $("#second").text(seconds)
        console.log(seconds)

        if(dis < 0){
            clearInterval(interval)
            console.log("clear")
        }
    },1000)
})