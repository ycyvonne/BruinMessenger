const rooms = require('./rooms');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000

let app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded());
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  res.render('login');
})

app.get('/rooms', (req, res, next) => {
  res.render('rooms');
})

app.post('/add', (req, res) => {
	let rm = req.body.roomName;
	rooms.addItem(rm);
	res.redirect('/rooms');
	console.log(rooms.get());
})


app.get('/delete/:id', (req, res) => {
	let id = req.params.id;
	rooms.removeItem(id);
	res.redirect('/rooms');
})


// 404 for all unregistered routes
app.use((req, res, next) => {
  res.status(404).render('404');
})

app.listen(port, () => {
  console.log('BruinMessenger running on port: ', port);
})
