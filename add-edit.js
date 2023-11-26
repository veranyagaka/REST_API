const express = require('express')
const router = express.Router()
const database = require('./database.js')

//---admin adding and editing stuff ---processes
//edit drug
router.put('/updateDrugs' , (req,res)=>{
    const {name, description, category, price } = req.body
    database.query('UPDATE drugs SET name= ? , price = ?, description= ?, category_id =? WHERE drug_id = ? ',[name,price, description, category], (err,rows)=>{
        if(err) throw err;
        else{
            res.send({message: "Successfully updated record"})
        }
    })
})
// Insert a new drug
router.post('/addDrugs', (req, res) => {
    const { name, description, category, price } = req.body;
    database.query(
      'INSERT INTO drugs (name, description, category_id, price) VALUES (?, ?, ?, ?)',
      [name, description, category, price],
      (err, result) => {
        if (err) {
          console.error('Error inserting new drug:', err);
          res.status(500).json({
            message: 'Internal Server Error',
          });
        } else {
          res.json({
            message: 'Successfully inserted new drug',
            insertedId: result.insertId,
          });
        }
      }
    );
  });
  //Insert drug category
  router.post('/addCategory', (req, res) => {
    const name = req.body;
    database.query(
      'INSERT INTO drug_categories SET ? ',name,
      (err, result) => {
        if (err) {
          console.error('Error inserting new category:', err);
          res.status(500).json({
            message: 'Internal Server Error',
          });
        } else {
          res.json({
            message: 'Successfully inserted new category',
            insertedId: result.insertId,
          });
        }
      }
    );
  });

// Update drug category
router.put('/updateCategory', (req, res) => {
    const { category_id, name } = req.body;
    database.query(
      'UPDATE drug_categories SET name = ? WHERE category_id = ?',
      [name, category_id],
      (err, result) => {
        if (err) {
          console.error('Error updating drug category:', err);
          res.status(500).json({
            message: 'Internal Server Error',
          });
        } else {
          if (result.affectedRows > 0) {
            res.json({
              message: 'Successfully updated drug category',
            });
          } else {
            res.json({
              message: 'Category not found or no changes made',
            });
          }
        }
      }
    );
  });
  
  //add user
  router.post('/addUsers', (req, res) => {
    const {name, age, email, drugs, gender, password } = req.body;
    database.query(
      'INSERT INTO users (name, age, email, drugs, gender ,password) VALUES (?, ?, ?, ?, ?, ?)',
      [name, age, email, password],
      (err, result) => {
        if (err) {
          console.error('Error inserting new user:', err);
          res.status(500).json({
            message: 'Internal Server Error',
          });
        } else {
          res.json({
            message: 'Successfully inserted new user',
            insertedId: result.insertId,
          });
        }
      }
    );
  });

// Update user
router.put('/updateUsers', (req, res) => {
    const { patient_id, name, age, email, drugs, gender, password } = req.body;
    database.query(
      'UPDATE users SET name = ?, age = ?, email = ?, drugs = ?, gender = ?, password = ? WHERE patient_id = ?',
      [name, age, email, drugs, gender, password, patient_id],
      (err, result) => {
        if (err) {
          console.error('Error updating user:', err);
          res.status(500).json({
            message: 'Internal Server Error',
          });
        } else {
          if (result.affectedRows > 0) {
            res.json({
              message: 'Successfully updated user',
            });
          } else {
            res.json({
              message: 'User not found or no changes made',
            });
          }
        }
      }
    );
  });
  
module.exports =router;