const express = require('express')
const router = new express.Router()
const User = require('../model/user')

router.post("/add-user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/find-by-id/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById({ _id });
    if (!user) {
      res.status(404).send("user not found");
    }
    res.send(user);
  } catch (err) {
    res.send(500).send();
  }
});

router.patch("/user-update/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/user-delete/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(404).send("Please provide valid user id");
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports=router