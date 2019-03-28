const socket = require('socket.io');
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: `${__dirname}/web/layouts`
}));
app.set('views', path.join(__dirname, 'web/views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/web/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = http.createServer(app).listen(3003, () => {
  console.log(`listening on port 3003`);
});
const io = socket.listen(server);



app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  });
});

io.sockets.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
