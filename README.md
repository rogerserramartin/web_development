# web_development
Trying Javascript with Node Js
I'll create a Notes App using Node Js and MongoDB

### Backend ###
# 1) npm init --yes : this command is used to create our Node Js project
npm init <initializer> can be used to set up a new or existing npm package.
npm is the default package manager for the JavaScript runtime environment Node.js. 
this json file created using that command describes the whole project:
{
  "name": "web_development",
  "version": "1.0.0",
  "description": "Trying Javascript with Node Js\r I'll create a Notes App using Node Js and MongoDB",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/rogersm92/web_development.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/rogersm92/web_development/issues"
  },
  "homepage": "https://github.com/rogersm92/web_development#readme"
}
# 2) npm install (or i) express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash 
npm i express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash
express: Fast, unopinionated, minimalist web framework for node.
handlebars: template engine (it's like an html extension)
session: to create sessions within the server (user authentication)
override: for post and get methods, for example
mongoose: module that allows us to connect with mongodb
passport and passport-local: used for user authentication
bcryptjs: for user password encryptation, to convert it into a hash
connect-flash: used for when a user provides wrong input. We'll display an alert with this
npm i nodemon -D: restart server automatically