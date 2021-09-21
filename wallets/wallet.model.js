const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', trim:true },
    money: { type: Number, required: true }
    // transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Wallet', schema);