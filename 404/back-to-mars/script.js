let hostname = location.hostname;
hostname = hostname.substring(hostname.indexOf(".") + 1);

window.addEventListener('load', (event) => {
        var home = document.getElementById('home');
        home.href = "https://"+hostname;
});