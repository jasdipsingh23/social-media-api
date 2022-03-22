let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
        time: { type: Date, required: true },
        text: { type: String, required: true, maxLength: 250 },
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
        likes: { type: Number }
    }
);

UserSchema.virtual('url').get(() => {
    return '/posts/' + this._id;
});

module.exports = mongoose.model('Post', PostSchema);