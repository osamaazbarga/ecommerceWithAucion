const express = require('express');

const router=express.Router()
router.get('/osa', (req, res) => {
    const user = 'Evg2rr2eni';
    res.json(user);
})


module.exports=router