 # Project Title

This is the README file for the Teacher's Grade logbook based on API Express.js and data store in JSON

## Description

This project is aimed at demonstrating the usage of Api Express JSON JavaScript full CRUD.

## CLI Commands

Here are the CLI commands that will drvie you to working example:

- npm install express --save
- npm install nodemon --save-dev
- npm install uuid --save
- mkdir public
- touch public/index.html public/edit.html public/about.html
- nodemon --ext js,mjs,cjs,json,html server.js
- rs manual restart


## Start scripts

```Json
  "scripts": {
    "test": "npm run start",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```
- npm run test  
- npm run start
- npm run dev 

## Beginers explanations

**npm run test:** This command runs the test suite for your application. The specific command it runs depends on how you've set up your tests. For example, if you're using a testing framework like Jest, the "test" script might be set to "jest". VSC you may use debug mode.

**npm run start:** This command usually starts your application. For a Node.js application, this might be set to "node server.js" or similar, which would start the server defined in server.js.

**npm run dev:** This command is often used in development and might start your application in a way that makes development easier. For example, it might start your server and automatically restart it whenever you save a file. This could be achieved using a tool like nodemon.

## Some more info for --watch

- npm install -g live-server
- live-server
- npm install -g browser-sync
- browser-sync start --server --files "*.*"

Please refer to the documentation for more details on how to use these commands.

## Installation

To install and run this project, follow these steps:

1. Clone the repository.
2. Run the following command to install the dependencies:

  ```bash
  npm install

  ```

3. Execute the project using the following command:

  ```bash
  npm start
  ```

## Usage

To use this project, follow these steps:

1. Open the terminal.
2. Navigate to the project directory.
3. Run the desired CLI command using the appropriate syntax.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

The endpoint for students is **/api/students/** and is ready to be extendent for example students, students-average, students-math, etc

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## My notes 

To kill a process running on a specific port (like 3000) on a Windows machine, follow these steps:

Open the Command Prompt.

Run the following command to find the process ID (PID) that is using the port 3000:

This will output something like this:
The last number (13528 in this case) is the PID of the process that's using the port.

To kill the process, use the taskkill command with the PID you found:
Replace 13528 with your actual PID. The /F flag is used to forcefully kill the process.

After running these commands, the process using port 3000 should be terminated, and you should be able to start your server again without getting an error about the port being in use.


### Shape of Apps

Requirements, here's a suggested structure for your project:

server.js: This is your server-side JavaScript file. It will use Express to create API endpoints for creating, reading, updating, and deleting students. It will also serve your static files (HTML, CSS, client-side JavaScript).

public/: This directory will contain your static files.

index.html: This page will display a list of all students. It will make fetch requests to your API to get the list of students and update the UI.

edit.html: This page will display a form for editing a student. It will make fetch requests to your API to get the current data for the student, update the student, and delete the student.

main.js: This is your client-side JavaScript file. It will contain the code for making fetch requests to your API and updating the UI based on the response.

students.json: This file will store your student data in JSON format. Your server-side code will read from and write to this file.

* webpack.config.js: This file will contain your Webpack configuration. You'll use Webpack to bundle your client-side JavaScript code. (not applied / Docker plans)

Here's a basic example of how you might set up your server.js file:


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

Html code available at the Scripterix Repo ( git clone ) the branch **finished**

### https://github.com/Scripterix/crud-express-json.git

[GitH Repo](https://github.com/Scripterix/crud-express-json.git)

## Browser Sync 

## npm install -g live-server

## live-server

## npm install -g browser-sync

Visit [website OpenGateWeb](https://opengateweb.com) for more tech guide like this and Score/Stars this repo.