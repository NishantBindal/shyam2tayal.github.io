var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var blogSchema=new Schema({
  post_date:Date ,
  post_author: String,
  post_author_edited: String,
  post_title: String,
  post_slug: String,
  post_content:String,
  post_status: String,
  featured_image: String,
  created_at: Date,
  updated_at: Date,
  author: {
    id: String,
    firstname: String,
    lastname: String,
    email: String,
    profile_image: String,
    confirmed: String,
    confirmation_code: String,
    created_at: Date,
    updated_at: Date
  }
});
module.exports=mongoose.model("blog",blogSchema);