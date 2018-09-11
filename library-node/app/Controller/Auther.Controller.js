'user strict'

const mongoose=require('mongoose');

var mongoose=require('../Models/Author.Model');
var AuthorSchema=mongoose.model('Author');

var AuthorController=function () {
    this.insert=function (data) {
        return new Promise(function (resolve,reject) {
            var author=new AuthorSchema({
                firstName:data.firstName,
                lastName:data.lastName,
                nationality:data.nationality
            });
            author.save().then(function () {
                resolve({status:200,message:'add new author'});
            }).catch(function (err) {
                reject({status:500,message:'error'+err})
            })
        })
    }
};
this.update=function (id,data) {
    return new Promise(function (resolve,reject) {
        AuthorSchema.update({_id:id},data).then(function () {
            resolve({status:200,message:'update  author'});
        }).catch(function (err) {
            reject({status:500,message:'err'+err});

        })
    })
};
this.delete=function (id) {
    return new Promise(function (resolve,reject) {
        AuthorSchema.remove({_id:id}).then(function () {
            resolve({status:200,message:'update  author'});
        }).catch(function (err) {
            reject({status:500,message:'err'+err});

        })
    })
};
this.search=function (id) {
    return new Promise(function (resolve,reject) {
        AuthorSchema.find({_id:id}).exec().then(function (author) {
            resolve({status:200,searchData:author});
        }).catch(function (err) {
            reject({status:500,message:'err'+err});

        })
    })
};


module.exports=new AuthorController();