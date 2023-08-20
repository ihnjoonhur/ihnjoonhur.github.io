// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const app = express();

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://ihnjoonh:Mongo!123@cluster0.vtossbd.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});
// // Middleware setup
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'some-secret-key',
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // User schema
// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String
// });

// const User = mongoose.model('User', userSchema);

// passport.use(new LocalStrategy(
//     function (username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//             if (err) return done(err);
//             if (!user) return done(null, false);
            
//             bcrypt.compare(password, user.password, function(err, res) {
//                 if (res) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false);
//                 }
//             });
//         });
//     }
// ));

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     User.findById(id, function (err, user) {
//         done(err, user);
//     });
// });

// // Routes
// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/login.html');
// });

// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login'
// }));

// app.get('/register', (req, res) => {
//     res.sendFile(__dirname + '/register.html');
// });

// app.post('/register', (req, res) => {
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//         const newUser = new User({
//             username: req.body.username,
//             password: hash
//         });
//         newUser.save(err => {
//             if (err) {
//                 res.redirect('/register');
//             } else {
//                 res.redirect('/login');
//             }
//         });
//     });
// });

// app.get('/', (req, res) => {
//     if (req.isAuthenticated()) {
//         // Render your todo app here
//         res.sendFile(__dirname + '/index.html');
//     } else {
//         res.redirect('/login');
//     }
// });

// app.listen(3000, () => {
//     console.log('Server started on port 3000.');
// });
