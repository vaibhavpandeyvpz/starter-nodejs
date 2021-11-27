const express = require('express');
const { User } = require('../models');

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: List all users.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns the users data.
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *             success:
 *               type: boolean
 *     security:
 *       - jwt: []
 *     tags:
 *       - users
 */
router.get('/users', async (req, res) => {
  res.send({
    data: await User.findAll({ attributes: { exclude: ['password'] } }),
    success: true,
  });
});

module.exports = router;
