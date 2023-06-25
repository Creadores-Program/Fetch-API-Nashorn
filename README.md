# Fetch-API-Nashorn
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) <br/>
Implement Fetch API in Nashorn!<br/>
With this Complete you will be able to Run fetch in Java with Nashorn!<br/><br/>
Credits to the bookstore of:<br/><br/>
<a href="https://github.com/shendepu/nashorn-polyfill">nashorn-polyfill</a><br/><br/>
# How to install:
First you have to run the JavaScript file with Nashorn from Java <a href="https://github.com/Trollhunters501/Fetch-API-Nashorn/blob/main/lib/GlobalAPI.js">lib/GlobalAPI.js</a> and <a href="https://github.com/Trollhunters501/Fetch-API-Nashorn/blob/main/Creadores%20Program/Fetch%20API.js">Creadores Program/Fetch API.js</a> and then upload your code and you are ready to use the Fetch API!
# How to use:
The API is Slightly different than the Browser but it does the same here an explanation:<br/><br/>
```js
//How to make a GET request
var requestGET = fetch("https://theurltest.com", "GET");
console.info("The page say: " + requestGET);
//It also works without putting "GET" example:
var requestGET2 = fetch("https://theurltest.com");
console.info("The page say: " + requestGET2);
//How to make POST request
var requestPOST = fetch("https://theurltest.com", "POST", JSON.stringify({
    content: "Content you send to the server, You can also obviously add more variables as you need just like Fetch!"
}));
//If the server sends a message you can receive the message!
console.info("The server says: " + requestPOST);
```
Here is an explanation of the Function:<br/><br/>
In GET it is not necessary since you can use fetch("URL");<br/><br/>
In post it is like this:
```js
//how fetch works:
fetch(theurl, method, contentToSend);
```
