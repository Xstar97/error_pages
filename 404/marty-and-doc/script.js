// no JS this time !
window.addEventListener('load', (event) => {
var hostname = window.parent.location.hostname;
hostname = hostname.substring(hostname.indexOf(".") + 1);
var home = document.getElementById('home');
home.href = "https://"+hostname;
});