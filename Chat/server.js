// server.js
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const Pusher = require('pusher');

//initialize Pusher with your appId, key and secret
const pusher = new Pusher({
    appId: '411434',
    key: '12e9a02ba38d6eca40ac',
    secret: 'd9f22e6f9e771d1b7866',
    cluster: 'us2',
    encrypted: true
});

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API route which the chat messages will be sent to
app.post('/message/send', (req, res) => {
  // 'private' is prefixed to indicate that this is a private channel
    pusher.trigger( 'private-reactchat', 'messages', {
        message: req.body.message,
        username: req.body.username
    });
    res.sendStatus(200);
});

// API route used by Pusher as a way of authenticating users
app.post('/pusher/auth', (req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
});

// Set port to be used by Node.js
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
