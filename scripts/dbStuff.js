var exp = require('express');
var router = exp.Router();

const { database } = require('./Database.js');
const varb = new database()
module.exports = router;
//varb.dropTable();
//varb.createTable();


router.get('/',  function(req, res){
   res.send("U cant C me")
   });
router.get('/data',  function(req, res){
   varb.printTable(res)
});

router.post('/search',  function(req, res){
  console.log(req.body)
   varb.searchDB(req.body.search,res)
});

router.post('/send', function(req, res){
  console.log("Received!")
  request = [req.body];

  varb.createRecord(request)
  
  
});

router.delete('/delete', function(req,res){
  console.log("Received!")
  res.send(varb.deleteRow(req.body.getremoved))
});
/*
router.put('/changeArtist', function(req,res){
  console.log("Received!")
  varb.updateTable(req.body.old,req.body.newartist,req.body.record)
});

router.put('/changeAlbum', function(req,res){
  console.log("Received!")
  varb.updateTable(req.body.old,req.body.newalbum,req.body.record)
});

router.put('/changeGenre', function(req,res){
  console.log("Received!")
  varb.updateTable(req.body.old,req.body.newgenre,req.body.record)
});

router.put('/changeYear', function(req,res){
  console.log("Received!")
  varb.updateTable(req.body.old,req.body.newyear,req.body.record)
});


*/