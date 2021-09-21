const express = require('express');
const router = express.Router();
const walletService = require('./wallet.service');

// routes
router.get('/myWallet', getCurrent);

module.exports = router;

function getCurrent(req, res, next) {
    walletService.getByUserId(req.user.sub)
        .then(wallet => wallet ? res.json(wallet) : res.sendStatus(404))
        .catch(err => next(err));
}
