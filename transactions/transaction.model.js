const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    walletId: { type: Schema.Types.ObjectId, ref: 'Wallet', trim:true, required: true },
    currency: { type: Schema.Types.ObjectId, ref: 'Currency', trim:true, required: true },
    type: { type: String, required: true},
    amount: { type: Number, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false
});

module.exports = mongoose.model('Transaction', schema);