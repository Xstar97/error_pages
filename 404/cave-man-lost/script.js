let hostname = location.hostname;
hostname = hostname.substring(hostname.indexOf(".") + 1);
window.addEventListener('load', (event) => {
var a = document.getElementById('home'); 
a.href = "https://" + hostname;
});