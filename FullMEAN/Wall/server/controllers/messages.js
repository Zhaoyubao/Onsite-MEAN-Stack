console.log('Messages controller is loaded');

let Message = require('../models/message'),
    Comment = require('../models/comment');

module.exports = {
    addMsg(req, res) {
        let data = { content: req.body.content, poster: req.params.user }
        Message.create(data, (err, msg) => {
            if(err)  console.log(`Error adding message: ${err}`);
            else  res.json(msg);
        })
    },
    getMsgs(req, res) {
        Message.find().sort('-_id').populate('_comments').exec( (err, msgs) => {
            if(err)  console.log(`Error while getting user: ${err}`);
            else  res.json(msgs);
        })
    },
    addComment(req, res) {
        let data = { content: req.body.content, poster: req.params.user }
        Comment.create(data, (err, comment) => {
            if(err)  console.log(`Error adding comment: ${err}`);
            else {
                Message.update({_id: req.params.msgId}, {$push: {"_comments": comment}}, (err) => {
                    if(err)  console.log(`Error while getting user: ${err}`);
                    else  res.json({status: 'ok'});
                })
            }
        })
    }
}
