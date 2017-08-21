var express=require("express");
var multer = require('multer');
var mongoose=require("mongoose");
var blog=require("../Models/blog.js");
var storage=multer.memoryStorage();
var upload = multer({ storage:storage });
var apiRouter=express.Router();
apiRouter.post("/AddBlog",upload.any(),function(req,res){
	console.log(req.body.q);
	mongoose.connect('mongodb://localhost:27017/Blog');
	var blogAdd=new blog({
  post_date:req.body.q ,
  post_author: req.body.q,
  post_author_edited: req.body.q,
  post_title: req.body.q,
  post_slug: req.body.q,
  post_content:req.body.q,
  post_status: req.body.q,
  featured_image: req.body.q,
  created_at: req.body.q,
  updated_at: req.body.q,
  author: {
    id: req.body.q,
    firstname: req.body.q,
    lastname: req.body.q,
    email: req.body.q,
    profile_image: req.body.q,
    confirmed: req.body.q,
    confirmation_code: req.body.q,
    created_at: req.body.q,
    updated_at: req.body.q
  }
});
	blogAdd.save(function(err){
		if(err)
			res.send(err);
		res.send("Blog");
	})
});
module.exports=apiRouter;