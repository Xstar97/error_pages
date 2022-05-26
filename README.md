# error_pages
custom error pages
these error 404 pages can be added to nginx proxy manager by creating a error page(s) in ~/data/nginx/error_pages/

you have the option to use a single 404 by declaring it like so:

location / {
    root /data/nginx/error_pages/4XX/pickle-rick;//pickle-rick is the folder of choice
    try_files $uri /index.html;
    include  /etc/nginx/mime.types;
}

//this will allow to run all of the 404 pages if you just use the default (index.html)[https://github.com/Xstar97/error_pages/blob/main/404/%20index.html] + css + js
//the (script.js)[https://github.com/Xstar97/error_pages/blob/main/404/%20script.js] will loop through every 404 so its never stale.
//it uses a iframe to plug the src
location / {
    root /data/nginx/error_pages/4XX/;
    try_files $uri /index.html;
    include  /etc/nginx/mime.types;
}

