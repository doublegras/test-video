const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const upload = multer(
  { 
    storage: multer.diskStorage({
      destination: (req, file, done) => {
        done(null, path.join(__dirname, './public/upload/video')); 
      },
      filename: (req, file, done) => {
        done(null, `${ Date.now() }-${ file.originalname }`);
      }
    }),
  }
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
	res.render('index.pug');
})

let pathFile;
app.post('/upload', upload.single('video'), (req, res, next) => {
	console.log(req.body);
	console.log(req.file)
	pathFile = req.file.path;
	res.redirect('/');
	res.end();
})

app.get('/api/video', (req, res) => {
	console.log(fs.statSync(pathFile).size);
	res.sendFile(pathFile);
})

app.listen(4000, () => {
  console.log('listening on port 4000');
});	