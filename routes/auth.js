const argon2 = require('argon2');
const express = require('express');
const { body, validationResult } = require('express-validator');
const jsonwebtoken = require('jsonwebtoken');
const { User } = require('../models');

const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login and get token.
 *     parameters:
 *       - name: email
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns the JWT token.
 *         schema:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *       400:
 *         description: Returns validation errors if any.
 *         schema:
 *           type: object
 *           properties:
 *             errors:
 *               type: array
 *       401:
 *         description: If email or password is incorrect.
 *     tags:
 *       - auth
 */
router.post(
  '/login',
  body('email').isEmail(),
  body('password').isLength({ min: 5, max: 50 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(401).end();
    }

    const verified = await argon2.verify(user.password, req.body.password);
    if (!verified) {
      return res.status(401).end();
    }

    const token = jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET);
    return res.send({ token });
  },
);

module.exports = router;
