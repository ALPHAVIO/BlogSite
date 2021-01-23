<div align="center">
  <h1>BlogSite</h1>
  <img src="assets/New Banner.jpg" />
</div>

## About-
- 'Blog' and 'blogging' are now loosely used for content creation and sharing on social media, especially when the content is long-form and one creates and shares content on regular basis.
<br/>

- This is a dynamically updating Blog posting website developed primarily using Node Js with EJS template engine and Mongoose as ODM(Object Data Modeling library).

## Tech Stack-
- ![Generic badge](https://img.shields.io/badge/Structure-HTML-blue.svg)
- ![Generic badge](https://img.shields.io/badge/Styling-CSS-red.svg)
- ![Generic badge](https://img.shields.io/badge/Template_Engine-EJS-yellow.svg)
- ![Generic badge](https://img.shields.io/badge/Backend-Node_JS-lightgreen.svg)
- ![Generic badge](https://img.shields.io/badge/MiddleWare-Express-orange.svg)
- ![Generic badge](https://img.shields.io/badge/Object_Modelling-Mongoose-purple.svg)
- ![Generic badge](https://img.shields.io/badge/Database-MongoDB-darkgreen.svg)
<hr>

## Screenshots -

<div align="center">
  <h3>Home Page</h3>
  <img src="assets/home.png" />
  <hr>
  <h3>Journal Page</h3>
  <img src="assets/blogpage.png" />
  <hr>
  <h3>About Page</h3>
  <img src="assets/about.png" />
  <hr>
  <h3>Contact Page</h3>
  <img src="assets/contact.png" />
  <hr>
</div>

## Environment Setup-

* Drop a :star: on the GitHub repository.
<br/>

* Download and install a code/ text editor.
    - Recommended-
        - [Download VS Code](https://code.visualstudio.com/download)
        - [Download Atom](https://atom.io/)
<br/>

* Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (when you download Node, npm also gets installed by default)
<br/>

* Mongo DB community editition is free and a great software in order to work with MongoDB applications. [Download Mongo DB community editition](https://docs.mongodb.com/manual/administration/install-community/)
<br/>

* Robo 3T is a desktop graphical user interface (GUI) for Mongo DB. It can help to skip running all the Mongo DB commands manually every time we want to access the data. [Download Robo 3T](https://robomongo.org/download) **(optional)**
<br/>

<hr>

## ⭐ Getting Started

* [Contribution guidelines for this project](/CONTRIBUTING.md) which should be followed strictly.
<br/>

* Fork the repository to your github account. 
<br>

* Clone the repository by running command
```
git clone https://github.com/ <your user-name> /BlogSite.git
```
in your git bash.
<br/>

* Run command `cd BlogSite`.
<br/>

* Run this command to install all dependencies for the project.
```
npm install
```
All the current dependencies -
```
  "body-parser": "^1.18.3",
  "ejs": "^2.6.1",
  "express": "^4.16.3",
  "lodash": "^4.17.20",
  "mongoose": "^5.11.9"
```
<br/>

* Run this command to start the project on local host 3000.
```
node app
```

* Open link to view the website in your browser window if it doesn't open automatically.
```
http://localhost:3000/
```
* You can learn more about EJS template engine and its syntax to know how we can use it inside our HTML using the [documentation](https://ejs.co/#docs)
<br/>

* Now you are all set to use this project.

* ### How to connect to local database (optional)
  * This is for testing and should be skipped while making contributions.
  <br>
  * You need to have MongoDB Community editition and Node.Js installed.
  <br>
  * Run this command on your terminal/ bash to start the Mongo server on port 27017(default).
  
    ```
    mongod
    ```
    
  * You need to change the URL to 'mongodb://localhost:27017/blogDB' on line 25 in app.js
  <br>
  * So line 25 looks like :
    ```
    const URL = 'mongodb://localhost:27017/blogDB'
    ```
  * Run this command to start the project on local host 3000.
    ```
    node app
    ```
  * Open the link in your browser.
    ```
    http://localhost:3000/
    ```
<br/>


#### Some useful Mongo DB commands if you are using the terminal instead of the GUI-
```
show dbs
use db <db name>
show collections
<db name> .find()
```
<hr>

## 📢  Open Source Program

<div align="center">
  <h1>JWOC</h1>
  <img src="assets/jwoc.jpg" />
  <p>JWoC ( JGEC Winter of Code) is a program organised by Developers JGEC in collaboration with Sristi 2020 which helps students to plunge into Open Source contribution and get the realm of Software Development.</p>
</div>

