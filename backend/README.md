## Overview
Playing with Nodejs, express, chai, mocha and more to develop a backend


## Lets talk top level Hierarchy

├── frontend //Where the frontend files live
├── backend                    
│   ├── Controllers         #Contains AppController.js with all application's main functions
│   ├── Middlewares            # Contains the resizing middleware
│   ├── routes             # Application routes in index.js
│   ├── tests            #App.test.js where all tests live
    └── public          #Where images are saved
    ├── server.js           # Where the server gets served. npm start calls this file
    └──  README.md           # Right here xD



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

  * **Code:** 200 <br />
    **Content:** `{  token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImJhciIsInBhc3N3b3JkIjoiZm9vIiwiaWF0IjoxNTkxODM4MDk1fQ.SnNZgYEY9Hkf9f" }`
 
* **Error Response: in case of missing credentials**
     
 
 
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "Mandatory params are missing!" }`


Example input:

```
{
    "userName":"Name",
    "password":"password"
}
```






## What the tests covers

The tests were written before the code in order to follow the TDD development process.
All application tests are in 
each test covers sends a request to one of the three endpoints covering all failure and success cases of the application



## Acknowledgments

* I would like to thank StackOverflow and google for their help


