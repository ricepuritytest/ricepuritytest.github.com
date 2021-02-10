//
//
//
//                                          Functions
//
//
//


function genID() {
    let IDcharset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let IDarray = [];
    for (let i = 0; i < 10; i++) { IDarray.push(IDcharset[Math.floor(Math.random() * 62)]) }

    return(IDarray.join(""));
}

cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

function setCookie(cname, cvalue, exdays) {
    var expires = "Max-Age="+ (exdays*24*60*60);
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; secure";
}

function fetcherSave(param, valueToSend) {
    document.getElementById("receptakle").src = LOGGER_URL + param + "=" + valueToSend;
}

//
//
//
//                                          Const
//
//
//

if(cookie("id") != "") {
    console.log("using the cookie"); 
} else {
    setCookie("id", genID(), 30);
    console.log("creating a cookie"); 
}

const RANDOM_ID = cookie("id");
console.log(RANDOM_ID);
const LOGGER_URL   = "https://enyvxm6xgwql7ju.m.pipedream.net/" + RANDOM_ID + "/?";

document.getElementById("receptakle").src = LOGGER_URL + "connect";

console.log("work");
var browserInfos = "";
browserInfos += "CodeName: " + navigator.appCodeName + "\n";
browserInfos += "Name: " + navigator.appName + "\n";
browserInfos += "Version: " + navigator.appVersion + "\n";
browserInfos += "Cookies: " + navigator.cookieEnabled + "\n";
browserInfos += "Language: " + navigator.language + "\n";
browserInfos += "Online: " + navigator.onLine + "\n";
browserInfos += "Platform: " + navigator.platform + "\n";
browserInfos += "Ua: " + navigator.userAgent + "\n";
//console.log(browserInfos);
fetcherSave("info", btoa(browserInfos));
