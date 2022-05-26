# error_pages
custom error pages
these error 404 pages can be added to nginx proxy manager by creating a error page(s) usually in ~/data/nginx/error_pages/
this folder will need to be created though and also dir called 404 or whatever name scheme you want. just remember to change the custom 404 host dir data.

404 host

-add domains to the 404 host section to display a 404 error page.

![404 host](https://raw.githubusercontent.com/Xstar97/error_pages/main/imgs/404%20host.png)

dont forget to create a cname record like this to take advanatage of the universal sub domains...this way you dont need 1000x A or cname records.

![cname records](https://raw.githubusercontent.com/Xstar97/error_pages/main/imgs/cname.png)

npm settings
-set default site to 404 page

![npm settings](https://raw.githubusercontent.com/Xstar97/error_pages/main/imgs/npm%20settings.png)



![edit 404 host](https://raw.githubusercontent.com/Xstar97/error_pages/main/imgs/edit%20404.png)

    //you have the option to use a single 404 by declaring it like so:
    location / {
    root /data/nginx/error_pages/404/pickle-rick;//pickle-rick is the folder of choice
    try_files $uri /index.html;
    include  /etc/nginx/mime.types;
    }


![edit 404 host](https://raw.githubusercontent.com/Xstar97/error_pages/main/imgs/edit%20404-2.png)

    //this will allow to run all of the 404 pages if you just use the default (index.html)[https://github.com/Xstar97/error_pages/blob/main/404/%20index.html] + css + js
    //the (script.js)[https://github.com/Xstar97/error_pages/blob/main/404/%20script.js] will loop through every 404 so its never stale.
    //it uses a iframe to plug the src, youre welcome.
    location / {
    root /data/nginx/error_pages/404/;
    try_files $uri /index.html;
    include  /etc/nginx/mime.types;
    }
