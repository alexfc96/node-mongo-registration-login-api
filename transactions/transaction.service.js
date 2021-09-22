const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
// const Wallet = db.Wallet;
const Transaction = db.Transaction;

module.exports = {
    getById,
    create,
    getMyTransactions
    // update,
    // delete: _delete
};

async function getById(id) {
    return await Transaction.findById(id);
}

async function getMyTransactions(id) {
    return await Transaction.find({walletId: id});
}

async function create(transactionParam) {
    // validate
    // crear middlewares
    if(transactionParam.type != "send" && transactionParam.type != "recive"){
        throw 'Type of transaction error';
    }

    // mirar si es una moneda de las que tenemos en nuestro catalogo
    // if(transactionParam.currency != "btc" || transactionParam.currency != "recive"){
    //     throw 'Type of currency not allowed';
    // }

    // mirar si tiene fondos en caso de que sea send
    // mirar que no sea a la misma billetera
    // mirar si existe la billetera

    const transaction = new Transaction(transactionParam);

    //saber a traves de la billetera el id del user que va ha enviado para quitarle el saldo
    //y luego añadirlo al que lo recive.

    // save transaction
    await transaction.save();
    // return await Transaction.find({walletId: id});

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