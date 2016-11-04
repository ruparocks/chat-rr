# chat-rr
Quick MEAN chat app

Git repository: https://github.com/ruparocks/rr-chat
Web app: https://rr-chat.herokuapp.com/

Basic specs that I want to accomplish with this small project:

- [ ] Login with a nickname ONLY, then straight to the public chat room. (Note that multiple users can choose the same nickname but it should be clear they are not the same user.)
- [ ] Ability to send messages to the public chat room
- [ ] View the last 10 messages (prior to the connection / entering the public chat room)
- [ ] Receive new messages (semi-real time) in the public chat room while connected
- [ ] Each user should have an avatar by his messages. 

UI/UX:

Think about the UX and implement an intuitive UI, the design should be responsive and fill the available screen space (i.e. use a stretched layout, not a boxed layout).

Guidelines:

- [x] Use MEAN Stack (AngularJS 1.5.7) with MongooseJS.
- [x] Publish to Heroku or EC2.
- [ ] Use AJAX for sending messages.
- [ ] Use Bootstrap as the UI framework.
- [x] DO NOT use websocket, SOCKET.IO or similar open source pub\sub drivers.
- [x] DO NOT use boilerplate code. The code needs to minimal and it needs to be yours ONLY, except for the packages: express, body-parser and mongoose.
- [x] DO NOT use other JavaScript frameworks – for ex. jQuery, ReactJS, EmberJS or BackboneJS.