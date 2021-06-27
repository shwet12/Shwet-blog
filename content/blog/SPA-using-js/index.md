---
title: SPA using vanilla Js!
date: "2021-06-27"
---




## The History - Life before SPAs came into picture

Previously websites would have multiple pages served from a server. Client would request for pages and server would return the markup to be rendered on the browser.

This was fine but It had some downsides.

* User would have to wait for their requested page to load and get rendered on the browser.
* The webiste would not have an app king of look and feel and won't be dynamic.



## What is Single Page application?

Most of us are familiar with new UI frameworks such as React,Angular etc. They all have one thing in common which is when we use these frameworks we are building single page application. 

What features does SPA have

  * As the name suggests it has only one page and all the routings are handled using Javascript.
  * Page refresh should not happen on page change or view change.

So basically our website will be having just one page and all other views of the page would be handled using javascript.This gives our website an app kind of look and feel which is more dynamic to user inputs.

This would be our only markup for the app. Every other thing would be done using Javascript.Our pages would route in the 'app' div.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single Page Application</title>
    <link rel="stylesheet" href="/static/css/index.css">
</head>

<body>
    <nav class="nav">
        <a href="/" class="nav__link" data-link>Home</a>
        <a href="/profile" class="nav__link" data-link>Profile</a>
        <a href="/blogs" class="nav__link" data-link>Blogs</a>
    </nav>
    <div id="app"></div>
    <script type="module" src="static/js/index.js"></script>
</body>

</html>
```
Steps to setup server a SPA using vanilla js

* We would need a server that sends our index.html to get our app up and running.
* We would also need to setup a route for all the css and js so that our browser know where to find it from.
* We would initilise a simple node project using npm and create a server.js file with below code.

## Server code

```javascript
const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
```

## Frontend

The most important part for the front end of the app is how to handle routing of the application to render different views.

* Each of the view would be a seperate Js file which will have the logic for that page.

* There would be a Router which will change the view based on the URL(i.e. window.location api).

```javascript
import { routes } from './routes.js';

const router = async () => {

    // check which route got matched
    const routesObject = routes.map((route) => {
        return {
            route: route,
            isMatched: location.pathname === route.path
        }
    });

    let matchedRoute = routesObject.find((route) => route.isMatched);

    if (!matchedRoute) {
        matchedRoute = {
            route: routes[0],
            isMatched: true
        }
    }
    const view = new matchedRoute.route.view();
    document.querySelector("#app").innerHTML = await view.render();
    initilizeRoutes();
}

document.addEventListener('DOMContentLoaded', () => {
    router();
})

```

