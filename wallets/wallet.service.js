const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const Wallet = db.Wallet;

module.exports = {
    getByUserId,
    // create,
    // update,
    // delete: _delete
};

async function getByUserId(ownerId) {
    return await Wallet.findOne({ownerId}).populate('transactions');
    // haría falta un populate pero tal y como tengo montado el esquema no se puede.
}

// async function update(id, userParam) {
//     const user = await Wallet.findById(id);

//     // validate
//     if (!user) throw 'User not found';
//     if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
//         throw 'Username "' + userParam.username + '" is already taken';
//     }

//     // hash password if it was entered
//     if (userParam.password) {
//         userParam.hash = bcrypt.hashSync(userParam.password, 10);
//     }

//     // copy userParam properties to user
//     Object.assign(user, userParam);

//     await user.save();
// }

// async function _delete(id) {
//     await User.findByIdAndRemove(id);
// }