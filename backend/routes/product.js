const express = require("express");
const path = require("path");
const pool = require("../config");
const fs = require("fs");
const multer = require("multer");

router = express.Router();

router.post("/addproduct", async  (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();

  const title = req.body.title;
  const brand = req.body.brand;
  const price = req.body.price;
  const image = req.body.image;
  const quantity = req.body.quantity;
  const bestsell = req.body.bestsell;

  try {
    await conn.query(
      "INSERT INTO products(title, brand, price, image, quantity, bestsell) VALUES(?, ?, ?, ?, ?, ?);",
      [title, brand, price, image, quantity, bestsell]
    );
    conn.commit();
    res.send("success!");
  } catch (err) {
    await conn.rollback();
    return res.status(400).json(err);
  } finally {
    conn.release();
  }
});

router.get("/getproduct", async  (req, res, next) => {
  const conn = await pool.getConnection();
  await conn.beginTransaction();

  try {
    const [product, fields] = await conn.query("SELECT * FROM products");
    return res.json(product);
  } catch (err) {
    return res.status(400).json(err);
  } 
});
// router.get("/getproduct", async  (req, res, next) => {
//   try {
//     const [rows, fields] = await pool.query("SELECT * FROM products");
//     return res.json(rows);
//   } catch (err) {
//     return res.status(500).json(err)
//   }
// });


router.get("/blogs/:id", function (req, res, next) {
  // Query data from 3 tables
  const promise1 = pool.query("SELECT * FROM blogs WHERE id=?", [
    req.params.id,
  ]);
  const promise2 = pool.query("SELECT * FROM comments WHERE blog_id=?", [
    req.params.id,
  ]);
  const promise3 = pool.query("SELECT * FROM images WHERE blog_id=?", [
    req.params.id,
  ]);

  // Use Promise.all() to make sure that all queries are successful
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      const [blogs, blogFields] = results[0];
      const [comments, commentFields] = results[1];
      const [images, imageFields] = results[2];
      res.json({
        blog: blogs[0],
        images: images,
        comments: comments,
        error: null,
      });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});


router.delete("/blogs/:id", async function (req, res, next) {
  // Your code here
  const conn = await pool.getConnection();
  // Begin transaction
  await conn.beginTransaction();

  try {
    // Check that there is no comments
    const [
      rows1,
      fields1,
    ] = await conn.query(
      "SELECT COUNT(*) FROM `comments` WHERE `blog_id` = ?",
      [req.params.id]
    );
    console.log(rows1);

    if (rows1[0]["COUNT(*)"] > 0) {
      return res
        .status(400)
        .json({ message: "Cannot delete blogs with comments" });
    }

    //Delete files from the upload folder
    const [
      images,
      imageFields,
    ] = await conn.query(
      "SELECT `file_path` FROM `images` WHERE `blog_id` = ?",
      [req.params.id]
    );
    const appDir = path.dirname(require.main.filename); // Get app root directory
    console.log(appDir)
    images.forEach((e) => {
      const p = path.join(appDir, 'static', e.file_path);
      fs.unlinkSync(p);
    });

    // Delete images
    await conn.query("DELETE FROM `images` WHERE `blog_id` = ?", [
      req.params.id,
    ]);
    // Delete the selected blog
    const [
      rows2,
      fields2,
    ] = await conn.query("DELETE FROM `blogs` WHERE `id` = ?", [
      req.params.id,
    ]);

    if (rows2.affectedRows === 1) {
      await conn.commit();
      res.status(204).send();
    } else {
      throw "Cannot delete the selected blog";
    }
  } catch (err) {
    console.log(err)
    await conn.rollback();
    return res.status(500).json(err);
  } finally {
    conn.release();
  }
});

exports.router = router;
