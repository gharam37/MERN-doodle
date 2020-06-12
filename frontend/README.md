## Overview
This Reactjs application interacts with the backend by first signing in then by uploading images and viewing them resized
the UI is mainly by Material-UI and Redux is used for state management   


## Lets talk top level Hierarchy

* **App.js**                  
Main application. contains basic routes definitions



* **Components**                  
Images.js is the upload page and SignIn.js is the SignIn page

* **reducers**                  
index.js is a combining reducer and loginReducer is the only reducer we have. i understand that only one was needed but i wanted to experiment with the features


* **actions**                  
Where reducers actions are only the loginReducer.js file with the api call for login 
          

* **index.js**                  
Combining reducers and calling App.js

* **README.md**  
Right here xD                




## Installation and Setup Instructions

### Installing

```
npm install
```

### running

```
npm start
```



the server will run on 

http://localhost:3000/    





### Pages

**Sign in **
----

* **URL**

  http://localhost:3000/   

![alt text](https://raw.githubusercontent.com/gharam37/MERN-doodle/master/SignIn.png)



**Upload**
----

* **URL**
 http://localhost:3000/upload








## Acknowledgments

* For this i mainly thank medium, my vpn service and the react documentation. xD
