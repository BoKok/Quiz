//var time = 60;

//var timer = setInterval(function() {
//    if (time <= 0) {
//        clearInterval(timer);
//    }
//    document.getElementById("progress").value = 60 - time;
//    time -= 1;
//}, 1000);

function hideDiv() {
    document.getElementById("welcomeMessage").classList.add("hide");
};

document.getElementById("start").addEventListener("click", hideDiv);