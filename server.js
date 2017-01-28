console.log("May Node be with you");

const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();

app.set('view engine', 'ejs')

var mongoDBURL = "mongodb://balegria:IOUiou123@ds133279.mlab.com:33279/with-alegria-posts";


MongoClient.connect(mongoDBURL, (err, database) => {
	if (err) return console.log(err);
	else {
		db = database;
		//only want to start our servers when DB is connected
		app.listen(process.env.PORT, '0.0.0.0', function(err) {
		  console.log("Started listening on %s", app.url);
		});
	}
})


// The urlencoded method within body-parser tells 
// body-parser to extract data from the <form> element 
// and add them to the body property in the request object.
app.use(bodyParser.urlencoded({extended: true}))



app.use("/views", express.static(__dirname + '/views'));
app.use("/public", express.static(__dirname + '/public'));



app.get('/', (req, res) => {
	res.render('index');
})

/*
 * GET request that will return all the posts in the database.
 */
app.get('/getLastThreePosts', (req, res) =>{
	//Will sort the posts in the database by the date parameter
	//so that the older posts come up at the top
	db.collection('postsCollection').find().sort({date: -1}).limit(3).toArray(function(err, result){
		if(err) return console.log(err);
		else{
			res.json(result);
		}
	})
})

// app.get('/getLivingPosts', (req, res) =>{
// 	db.collection('postsCollection').find().toArray(function(err,result){
// 		if(err) return console.log(err);
// 		else{
// 			res.json(result);
// 		}
// 	})
// })



/*
 * POST request that will add a post to the database.
 */
app.post('/addPost', (req, res) => {
	req.body.date = new Date();
	db.collection('postsCollection').save(req.body, (err, result) => {
	  	if (err) return console.log(err);
	  	else {
	  		console.log('saved to database');
	  		res.redirect('/');
	  	}
	})
})





