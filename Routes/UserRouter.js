const express = require('express');
const { AddUSer, GetDataUSers, UpdateUsers, DeleteUsers } = require('../Controllers/UserController');
const router = express.Router();


router.post('/',AddUSer)

router.get('/',GetDataUSers)

router.put('/:id',UpdateUsers)

router.delete('/:id',DeleteUsers)


module.exports = router