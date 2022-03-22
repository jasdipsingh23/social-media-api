let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema(
    {
        first_name: { type: String, required: true, maxlength: 100 },
        last_name: { type: String, required: true, maxlength: 100 },
        date_of_birth: { type: Date },
        about: { type: String, maxLength: 150 },
        friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
    }
);

UserSchema.virtual('name').get(() => {
    let fullname = '';
    if (this.first_name) {
        fullname += this.first_name;
    }

    if (this.last_name) {
        fullname += ' ' + this.last_name;
    }

    return fullname;
});

UserSchema.virtual('url').get(() => {
    return '/users/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);