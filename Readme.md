# Final Group Project: MS Connect

Live website can be found here:

[https://davesrose-msconnect.herokuapp.com//](https://davesrose-msconnect.herokuapp.com//)

## Contributors

Brice Nguoghia : User Authentication, [https://github.com/ngbricen//](https://github.com/ngbricen//)

Mauricio Rameriz : Chat Application, [https://github.com/marez111//](https://github.com/marez111//)
--working chat: [https://github.com/marez111/chat-ms-connect//](https://github.com/marez111/chat-ms-connect//)

David Rosenberg : Front End Development and animation

Hajar Zemzem : Events Page, [https://github.com/hzemzem//](https://github.com/hzemzem//)

## Technologies Used

   - Mongoose, Express, React, Node
   - Axios
   - Bcrypt
   - Jsonwebtoken
   - multer
   - multer-s3, aws-sdk
   - passport, passport-jwt
   - socket.io
   - react-bootstrap

## Development

This project is meant as a way of informing and connecting people affected with multiple sclerosis.  Our goals were to create a system that included authentication, a user profile that could help match a person within the same age and area radius, and to be able to find upcoming events.  We have the authentication and user profile completed.  The user can upload a photo, and it's saved to Amazon S3 bucket.  The user can then go to events to see upcoming ones, create a new one, or save ones they're interested in.  We did develop a chat system, but found it couldn't be encorporated in our deployed Heroku app.  It has to do with chat using a different port, and Heroku not being easy to configure multiple dynos.

## File structure used:

```
.
├── client
│   ├── build
│   ├── public
│   └── src
│       ├── components
│       ├── modules
│       ├── pages
│       └── utils
│
├── config
│   ├── index.js
│   ├── passport.js
│   └── s3.js
│
├── controllers
│   ├── authController.js
│   ├── eventsController.js
│   ├── fileController.js
│   ├── userEventsController.js
│   └── usersController.js
│ 
├── models
│   ├── evente.js
│   ├── user.js
│   ├── userevent.js
│   └── usersearch.js
│
├── node_modules
│
├── routes
│   └── api
│       ├── auth.js
│       ├── events.js
│       ├── file.js
│       ├── index.js
│       ├── userEvents.js
│       └── users.js
│       index.js
│
├─ package.json
│
└─ server.js
```
