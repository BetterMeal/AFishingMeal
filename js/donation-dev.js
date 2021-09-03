"use strict";
window.oncontextmenu = function () {
    return false;
};
window.onselectstart = function () {
    return false;
};
function index() {
    let day = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    let date = `${new Date().getMonth() + 1}/${new Date().getDate()} ${day[new Date().getDay()]}`;
    let areaNumber = ["", "自助餐", "套餐A", "套餐A", "套餐B", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];
    document.getElementById("nowtime-print").innerHTML = date;
    let usrname = prompt("Please enter your name:");
    let area = prompt("Amount of donation:");
    if (usrname === null || area === null) {
        document.getElementById("congrats").innerHTML = "Donation Canceled!";
        setTimeout(function () {
            window.location.replace("https://usfns.tk/");
        }, 1000);
    } else if (!(area >= 1 && area <= 9) || usrname === "" || area === "") {
        alert("Illegal input!");
        index();
        return false;
    } else {
        document.getElementById("area-print").innerHTML = area;
        document.getElementById("congrats").innerHTML = "Thanks For Your Donation!";
        document.addEventListener("click", function () {
            window.location.replace("https://www.fns.usda.gov");
        });
        alert("Thanks for your donation!");
    }
    document.getElementById("name-print").innerHTML = usrname;
    document.getElementById("qrcode-print").src = `https://wenhairu.com/static/api/qr/?size=300&text=https://usfns.tk/scan.html?id=${encodeURI(usrname)}_${area}`;
    if (area >= 1 && area <= 3) {
        document.getElementById("floor-print").innerHTML = "一";
    } else {
        document.getElementById("floor-print").innerHTML = "二";
    }
    document.getElementById("district-print").innerHTML = areaNumber[area];
}
if (new Date().getHours() >= 8 && new Date().getHours() <= 10
    && window.location.href.indexOf("?track_id=af609ed206722bd0793713d50ca2858e897633b75d0453f97b6ab61c42c2e7e6") != -1
    && document.referrer === "https://usfns.tk/") {
    document.querySelector("title").innerHTML = "Donation";
    index();
} else {
    document.getElementById("congrats").innerHTML = "404 Not Found";
    setTimeout(function () {
        window.location.replace("https://usfns.tk/");
    }, 1000);
    // index();
}