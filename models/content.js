var mongodb = require('./mongodb');
var Schema = mongodb.Schema;
var ContentSchema = new Schema({
    id : String,
    votes : {
        down : Number,
        up : Number
    },
    content : String,
    state : String,
    tag : String,
    comments_count : Number,
    user : {
        avatar_updated_at : String,
        last_visited_at : String,
        created_at : String,
        state : String,
        email : String,
        last_device : String,
        role : String,
        login : String,
        icon : String
    },
    image : String,
    image_size : {
        s : [
            Number,
            Number,
            String
        ],
        m : [
            Number,
            Number,
            String
        ]
    },
    allow_comment : Boolean,
    share_count : Number,
    type : String
});
var Content = mongodb.model("Content", ContentSchema);
var ContentDAO = function(){};

//������Ϣ
ContentDAO.prototype.save = function(obj, callback) {
    var instance = new Content(obj);
    instance.save(function(err){
        callback(err);
    });
};

//��ȡ�б���Ϣ
ContentDAO.prototype.getContentList = function(query, callback) {

    Content.find(query, function(err, res){
        if (err) {
            console.log(err.message);
        }
        console.log(res);
    });
};

//��ȡ������Ϣ
ContentDAO.prototype.getContent = function(query, callback) {

    Content.findOne(query, function(err, res){
        if (err) {
            console.log(err.message);
        }
        console.log(res);
    });
};


module.exports = new ContentDAO();