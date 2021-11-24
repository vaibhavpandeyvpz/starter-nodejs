const express = require('express');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     description: For health check.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns alive = true if all good.
 *         schema:
 *           type: object
 *           properties:
 *             alive:
 *               type: boolean
 *     tags:
 *       - home
 */
router.get('/', async (req, res) => {
  res.send({ alive: true });
});

module.exports = router;
