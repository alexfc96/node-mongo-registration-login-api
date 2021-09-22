const express = require('express');
const router = express.Router();
const walletService = require('../wallets/wallet.service');
const transactionService = require('./transaction.service');

// routes
router.get('/', getAll);
router.get('/:id', getMyTransactions);
router.post('/new', newTransaction);
// router.get('/:id', getById);
// router.put('/:id', update);
// router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    transactionService.getAll()
        .then(wallets => res.json(wallets))
        .catch(err => next(err));
}

//give the transactions associated to a wallet
function getMyTransactions(req, res, next) {
    transactionService.getMyTransactions(req.params.id) // que pasar? req.params? id del wallet
        .then(wallets => res.json(wallets))  // alomejor hay q devolver otra cosa
        .catch(err => next(err));
}

function newTransaction(req, res, next) {
    transactionService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

// function getById(req, res, next) {
//     walletService.getById(req.params.id)
//         .then(wallet => wallet ? res.json(wallet) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function update(req, res, next) {
//     walletService.update(req.params.id, req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function _delete(req, res, next) {
//     walletService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }