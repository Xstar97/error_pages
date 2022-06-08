let hostname = location.hostname;
hostname = hostname.substring(hostname.indexOf(".") + 1);
$(document).ready(function(){
        $.getJSON("./data.json", function(data){
            console.log(data.dirs);
        }).fail(function(){
            console.log("An error has occurred.");
        });
    });
const pages = [
"gandalf", "marty-and-doc", "cogwheels", 
"lost", "pickle-rick", "toaster", 
"rocket", "cave-men", "cave-man-lost", 
"ghost", "bear", "robo", "back-to-mars",
"space-invaders-game", "spooky-graveyard", "no-life"
];

var count = pages.length;

function storageCapable() {
        return typeof(Storage) !== "undefined";
}

function getRandomNumber() {
        return Math.floor(Math.random() * count);
}

function getPage(number) {
        var item = pages[number];
        var page = item + "/index.html";
        return page;
}

function setListIndex(n) {
        var lN = Math.floor(n);
        if (storageCapable()) {
                lN++;
                if (lN >= count) {
                        lN = 0;
                }
                console.log("data: n-> " + lN);
                localStorage.setItem('index', lN);
        }
}

function getListIndex() {
        return storageCapable() && localStorage.getItem('index') != null ? localStorage.getItem('index') : getRandomNumber();
}

window.addEventListener('load', (event) => {
        var index = Math.floor(getListIndex());
        console.log("data: index-> " + index);
        var mPage = getPage(index);
        document.getElementById('loadHere').src = mPage;
        setListIndex(index);
});