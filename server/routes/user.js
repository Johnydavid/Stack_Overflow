const router = require("express").Router();
const { Router } = require("express");
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

// POST METHOD for Signup

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });

    if (user)
      return res.status(409).send({ message: "User Email Already Signed Up" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    return res
      .status(201)
      .send({ message: "User registered with Stack_Overflow Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;