var handle1 = 250;
var speed1 = 0;
var handle2 = 250;
var speed2 = 0;
var ballleft = 770;
var balltop = 330;
var ballleftspeed = 0;
var balltopspeed = 0;
var score1 = 0;
var score2 = 0;
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 87) {
        speed1 = -10;
    }
    if (e.keyCode == 83) {
        speed1 = 10;
    }
    if (e.keyCode == 38) {
        speed2 = -10;
    }
    if (e.keyCode == 40) {
        speed2 = 10;
    }
});
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 87) {
        // if (handle1 > 0) {
        speed1 = 0;
        // }
    }
    if (e.keyCode == 83) {
        // if (handle1 < 590) {
        speed1 = 0;
        // }
    }
    if (e.keyCode == 38) {
        // if (handle2 > 0) {
        speed2 = 0;
        // }
    }
    if (e.keyCode == 40) {
        // if (handle2 < window.innerHeight) {
        speed2 = 0;
        // }
    }
});
function start() {
    var dir1 = 0;
    var dir2 = 0;
    ballleft = 770;
    balltop = 330;
    if (Math.random() < 0.5) {
        dir1 = 1;
    }
    else {
        dir1 = -1;
    }
    if (Math.random() < 0.5) {
        dir2 = 1;
    }
    else {
        dir2 = -1;
    }
    ballleftspeed = dir1 * Math.random() * 10;
    balltopspeed = dir2 * Math.random() * 10;
}
setInterval(function () {
    if (handle1 + speed1 >= 0 && handle1 + speed1 <= window.innerHeight - 150) {
        handle1 += speed1;
    }
    if (handle2 + speed2 >= 0 && handle2 + speed2 <= window.innerHeight - 150) {
        handle2 += speed2;
    }
    ballleft += ballleftspeed;
    balltop += balltopspeed;
    if (balltop < 0 || balltop > window.innerHeight) {
        balltopspeed = -balltopspeed;
    }
    if (ballleft <= 40) {
        console.log(handle1 + " " + balltop + " " + ballleft);
        if (balltop > handle1 && balltop < handle1 + 150) {
            console.log(2);
            ballleftspeed = -ballleftspeed;
        }
        else {
            start();
            score2++;
        }
    }
    if (ballleft >= window.innerWidth - 40) {
        if (balltop >= handle2 && balltop <= handle1 + 150) {
            ballleftspeed = -ballleftspeed;
        }
        else {
            start();
            score1++;
        }
    }
    document.querySelector(".handle1").style.top = handle1 + "px";
    document.querySelector(".handle2").style.top = handle2 + "px";
    document.querySelector(".ball").style.left = ballleft + "px";
    document.querySelector(".ball").style.top = balltop + "px";
    document.querySelector(".score1").innerHTML = score1 + "";
    document.querySelector(".score2").innerHTML = score2 + "";
    if (score1 == 3) {
        alert("Player 1 wins");
        score1 = 0;
        score2 = 0;
    }
    if (score2 == 3) {
        alert("Player 2 wins");
        score1 = 0;
        score2 = 0;
    }
}, 20);
start();
