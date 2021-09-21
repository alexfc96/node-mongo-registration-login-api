const express = require('express');
const router = express.Router();
const currencyService = require('./currency.service');

// routes
router.get('/', getAll);
router.post('/new', newCurrency);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.put('/:id', update);
// router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    currencyService.getAll()
        .then(currencies => res.json(currencies))
        .catch(err => next(err));
}

function newCurrency(req, res, next) {
    currencyService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

// function getCurrent(req, res, next) {
//     walletService.getById(req.wallet.sub)
//         .then(wallet => wallet ? res.json(wallet) : res.sendStatus(404))
//         .catch(err => next(err));
// }

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