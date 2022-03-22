let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
        time: { type: Date, required: true },
        text: { type: String, required: true, maxLength: 250 },
        likes: { type: Number }
    }
);

UserSchema.virtual('url').get(() => {
    return '/comments/' + this._id;
});

module.exports = mongoose.model('Comment', CommentSchema);