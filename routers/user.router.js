/*jshint esversion:6*/
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('users gotten, yo');
});
router.get('/users/:userId', (req, res) => {
  res.send('getting that one special someone');
});
router.post('/users', (req, res) => {
  res.send('creeating that new user you requested');
});
router.put('/users/:userId', (req, res) => {
  res.send('updates errrrrwhere');
});
router.delete('/users/:userId', (req, res) => {
  res.send('bye bye');
});

module.exports= router;
