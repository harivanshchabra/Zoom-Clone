
// server.listen (3000);

const express = require ("express")
const app = express ();

const server = require ("http").Server (app);

app.set ('view engine', 'ejs');

app.get ('/', (req,  res) => {
   res.render('room');
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});