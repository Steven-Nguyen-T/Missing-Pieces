const express = require('express');

const router = express.Router();
const collectionController = require('../controllers/collectionController');
const gameController = require('../controllers/gameController');

router.post(
  '/pieces/:game_id',
  collectionController.getCollection,
  collectionController.addPieces,
  (req, res) => {
    res.status(200).json({ success: true });
  },
);

router.post(
  '/:game_id',
  gameController.fetchGameById,
  gameController.addGame,
  collectionController.addCollection,
  (req, res) => {
    res.status(200).json({ success: true });
  },
);

module.exports = router;
