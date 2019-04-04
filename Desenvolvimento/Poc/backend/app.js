const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host : 'bbwatch.cwmby72lddc8.us-east-1.rds.amazonaws.com',
    user : 'admin',
    password : 'Abc1234*',
    database : 'bbwatch'
});

db.connect();

app.get('/data', function(req,res){
var sql = 'SELECT * FROM usuarios';
db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(result);
});
});

app.post('/data', function(req, res){
	console.log(req.body); 
    var data = {'email':req.body.email, 'nome':req.body.nome};
    
    var sql = 'INSERT INTO usuarios (nome,email)SET ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({
        status: 'Informação Enviada!',
        no: null,
		'email': req.body.email,
		'nome': req.body.nome
	});
});
});

app.listen(3210, ()=>{
    console.log('Backend escutando e enviando na porta 3210')
});
var Greenlock = require('/home/ec2-user/BBWatch/greenlock-express.js/');

var greenlock = Greenlock.create({

  // Let's Encrypt v2 is ACME draft 11
   version: 'draft-11'

  , server: 'https://acme-v02.api.letsencrypt.org/directory'
  // Note: If at first you don't succeed, stop and switch to staging
  // https://acme-staging-v02.api.letsencrypt.org/directory

  // You MUST change this to a valid email address
  , email: 'a6pgp2019@gmail.com'

  // You MUST NOT build clients that accept the ToS without asking the user
  , agreeTos: true

  // You MUST change these to valid domains
  // NOTE: all domains will validated and listed on the certificate
  , approvedDomains: [ 'bbwatch.ga', 'www.bbwatch.ga' ]

  // You MUST have access to write to directory where certs are saved
  // ex: /home/foouser/acme/etc
  , configDir: '~/.config/acme/'

  // Get notified of important updates and help me make greenlock better
  , communityMember: true
  //
  //                     //, debug: true
  //
  });
