var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const database = require('./database.js');

router.post('/', (req, res, next) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM api_user WHERE email = ? AND password = ?';
  database.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({
        ok: false,
        message: 'Internal Server Error',
      });
    } else {
      if (results.length > 0) {
        let token = jwt.sign(
          { email: email },
          'secretkey',
          { expiresIn: '1h' },
          (err, token) => {
            if (err) {
              console.error(err);
            } else {
              res.json({
                ok: true,
                message: 'Login successful',
                token: token,
              });
            }
          }
        );
      } else {
        res.json({
          ok: false,
          message: 'Email or password incorrect',
        });
      }
    }
  });
});

module.exports = router;
