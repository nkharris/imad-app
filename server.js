var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  'article-one': {
    title: "Article One",
    date: "25 October 2015",
    content: "This is the content of article one",
    author: "Tushar Chenan"
  },
  'article-two': {
    title: "Article Two",
    date: "25 November 2015",
    content: "This is the content of article two",
    author: "Tushar Chenan"
  },
  'article-three': {
    title: "Article Three",
    date: "25 December 2015",
    content: "This is the content of article three",
    author: "Tushar Chenan"
  },
};

var createTemplate = (article) => {
  var title = articles["article-"+article].title;
  var date = articles["article-"+article].date;
  var content = articles["article-"+article].content;
  var author = articles["article-"+article].author;
  
  var templateString = `
  <html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <h1>Article ${article}</h1>
        <br>
        <h3>${date}</h3>
        <br>
        <h3> By: ${author} </h3>
        <br>
        <p>${content}</p>
        <br>
        Copyright @2017 Tushar Chenan
    </body>
  </html>
  `;
  return templateString;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/article/:artno", (req,res) => {
    var artno = req.params.artno;
    res.send(createTemplate(artno)); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});