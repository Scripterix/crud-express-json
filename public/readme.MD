# Docs in readme.md are the terminal step by step*
# App for Teacher's gradebook


## npm init - y

Install Express Prod Dependency

## npm install express --save

Install Nodemon Dev Dependency

## npm install nodemon --save-dev
## nodemon --ext js,mjs,cjs,json,html server.js

Create Structure Public and Config Server

## touch server.js

## mkdir public

## touch public/index.html public/edit.html public/about.html

Server Config and Script Commands

```Package.json
"scripts": {
    "test": "npm run start",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```
server.js

```JavaScript
express = require('express');
app = express();
app.use(express.static(__dirname + '/public'));
app.listen(3000);
console.log('Listening on port 3000');
```

## Add the Bootstrap CSS and JS and place them in the public.

Html code available at the Scripterix Repo ( git clone )

### https://github.com/Scripterix/crud-express-json.git

[GitH Repo](https://github.com/Scripterix/crud-express-json.git)

## Browser Sync 

## npm install -g live-server

## live-server

## npm install -g browser-sync

## browser-sync start --server --files "*.*"

Nodemon is primarily used for restarting server-side applications (like a Node.js server) when file changes are detected. It doesn't automatically refresh client-side code (like HTML, CSS, or client-side JavaScript) in the browser.

If you're making changes to edit.html and want the browser to automatically refresh to show those changes, you'll need a different tool. One such tool is live-server, which serves up your static files and refreshes the browser whenever a file is changed.

## Serve && Client Side

This command will start a server and open your default web browser. The --files "*.*" option tells browser-sync to watch all files in the current directory and its subdirectories.

As for your question about whether it's better to see the app side or client side when doing API CRUD operations, it really depends on what you're working on at the moment.

If you're working on the server-side code (like creating API endpoints), it might be more useful to see the server logs to make sure your endpoints are working correctly.
If you're working on the client-side code (like making fetch requests to the API and updating the UI based on the response), it might be more useful to see the client side to make sure the UI updates correctly.
In practice, you'll often need to see both sides. You might find it helpful to have your server logs open in one terminal and your browser open to see the client side. You can switch back and forth between them as needed.

## Student.json touch stydent.json

## Extnended serve.js 

uuid, fs, json, parse and endpoint

# create main.js in publick with fetch()

display data in index