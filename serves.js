
// server.listen (3000);

const express = require ("express")
const app = express ();
const {v4:uuidv4} = require ("uuid");
const server = require ("http").Server (app);

app.set ('view engine', 'ejs');
app.use (express.static('public'));

app.get ('/', (req,  res) => {
   res.redirect(`/${uuidv4()}`);
})

app.get  ('/:room', (req, res) => {
res.render ('room', {roomId: req.params.room
})
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
