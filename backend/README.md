## Overview
Playing with Nodejs, express, chai, mocha and more to develop a backend


## Lets talk top level Hierarchy

* **Controllers**                  
Contains AppController.js with all application's main functions

**Middlewares                    # Contains the resizing middleware
**routes                     # Application routes in index.js
** tests                    # App.test.js where all tests live
**public                   #Where images are saved
**server.js     # Where the server gets served. npm start calls this file
**README.md     #Right here xD

## Installation and Setup Instructions

### Installing

```
npm install
```

### running

```
npm start
```

### testing

```
npm test
```

the server will run on 

http://localhost:3001/

### Endpoints

**Login**
----
  Returns a jwt token once a user gives a userName and a password.

* **URL**

  http://localhost:3001/login

* **Method:**

  `POST`
  


* **Data Params**

  **Required:**
 
   `userName=[String]`
   `password=[String]`

* **Success Response:**

  * **Code:** 200 
    **Content:** `{  token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImJhciIsInBhc3N3b3JkIjoiZm9vIiwiaWF0IjoxNTkxODM4MDk1fQ.SnNZgYEY9Hkf9f" }`
 
* **Error Response: in case of missing credentials**
     
 
 
  * **Code:** 401 UNAUTHORIZED 
    **Content:** `{ message : "Mandatory params are missing!" }`


Example input:

```
{
    "userName":"Name",
    "password":"password"
}
```





**patch**
----
  Takes a document , an operation and an access token. Returns a patched document

* **URL**

  http://localhost:3001/patch

* **Method:**

  `POST`
  


* **Data Params**

  **Required:**
 
   `document=[JsonString]`
   `operation=[JsonString]`

* **Success Response:**

  * **Code:** 200
    **Content:** `{
    "newDoc": {
        "firstName": "Joachim",
        "contactDetails": {
            "phoneNumbers": []
        }
    }
}`
 
* **Error Response: in case of missing token**
     
 
 
  * **Code:** 401 UNAUTHORIZED 
    **Content:** `{ error : "Authentication error. Token required." }`

    or 
* **Error Response: invalid inputs**


      * **Code:** 404 not found 
    **Content:** `{ message : "Mandatory params are missing! give a document and an operation"}`


Example input:

```
{
    "document": { "firstName": "Albert", "contactDetails" : { "phoneNumbers": [] } },
    "operation": { "op": "replace", "path": "/firstName", "value": "Joachim" }
  
}
```



**thumbnail**
----
  takes a file called image in a form/data and returns a url of the resized image

* **URL**

  http://localhost:3001/thumbnail

* **Method:**

  `POST`
  




   * **Data Params**

  **Required:**
 
   `image=[file]`



 
* **Success Response:**

  * **Code:** 200
    **Content:**  `{
    "url": "http://localhost:3001/images/9660e6bb-245b-43cc-a8d1-76986b9fc634.png"
}`
 
* **Error Response: in case of missing token**
     
 
 
  * **Code:** 401 UNAUTHORIZED 
    **Content:** `{ error : "Authentication error. Token required." }`

    or 
* **Error Response: invalid inputs**


      * **Code:** 404 not found 
    **Content:** `{ message :"Please provide an image"}`


Example input:

```
{
    "document": { "firstName": "Albert", "contactDetails" : { "phoneNumbers": [] } },
    "operation": { "op": "replace", "path": "/firstName", "value": "Joachim" }
  
}
```

## What the tests covers

The tests were written before the code in order to follow the TDD development process.
All application tests are in 
each test covers sends a request to one of the three endpoints covering all failure and success cases of the application



## Acknowledgments

* I would like to thank StackOverflow and google for their help
