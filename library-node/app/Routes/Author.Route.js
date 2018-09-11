'user strict';

const express=require('express');
const mongoose=require('mongoose');

var Controller=require('../Controller/Auther.Controller');
const AuthorModel=mongoose.model('Author');
const Router=express.Router();


Router.post('/', function (req, res) {
    //console.log("Got a POST request for the homepage");
    Controller.insert(req.body).then(function (data) {
        res.status(data.status).send({message:data.message});
    });
}).catch(function (err) {
    res.status(err.status).send({message:err.message});
});
//..........................................................

Router.put('/', function (req, res) {
    //console.log("Got a POST request for the homepage");
    Controller.update(req.params.id,req.body).then(function (data) {
        res.status(data.status).send({message:data.message});
    });
}).catch(function (err) {
    res.status(err.status).send({message:err.message});
});


//.............................................................
Router.delete('/:id', function (req, res) {
    //console.log("Got a POST request for the homepage");
    Controller.delete(req.params.id).then(function (data) {
        res.status(data.status).send({message:data.message});
    });
}).catch(function (err) {
    res.status(err.status).send({message:err.message});
});

//............................................................
Router.get('/:id', function (req, res) {
    //console.log("Got a POST request for the homepage");
    Controller.search(req.params.id).then(function (data) {
        res.status(data.status).send({message:data.searchData});
    });
}).catch(function (err) {
    res.status(err.status).send({message:err.message});
});

//.............................................................
Router.get('/', function (req, res) {
    //console.log("Got a POST request for the homepage");
    Controller.searchAll().then(function (data) {
        res.status(data.status).send({message:data.searchAllData});
    });
}).catch(function (err) {
    res.status(err.status).send({message:err.message});
});


module.exports=Router;