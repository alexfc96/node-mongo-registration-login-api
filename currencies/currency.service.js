const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const Currency = db.Currency;

module.exports = {
    getById,
    getAll,
    create,
    // update,
    // delete: _delete
};

async function getById(id) {
    return await Transaction.findById(id);
}

async function getAll() {
    return await Currency.find();
}

async function create(currencyParam) {
    // validate
    // crear middlewares para mirar si ya la tenemos
    // if(currencyParam.type != "send" || currencyParam.type != "recive"){
    //     throw 'Type of currency error';
    // }

    const currency = new Currency(currencyParam);

    // save currency
    await currency.save();

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