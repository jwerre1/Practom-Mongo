const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/User');

const { registerValidation, loginValidation } = require('../data/validation');


exports.authenticate = (req, res, next) => {
  res.send("auth.js route");
}

exports.newUser = async (req, res, next) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json({ error: "Email aready exists" });

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password
  });

  try {
    const savedUser = await user.save();
    res.json({ error: null, data: savedUser })
  } catch (error) {
    res.status(400).json({ error });
  }
}

exports.login = async (req, res, next) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: "Email not found" });

  const validatePassword = await bcrypt.compare(req.body.password, user.password);
  if (!validatePassword) return res.status(400).json({ error: "Password is incorrect" });

  const token = jwt.sign(
    {
      name: user.name,
      id: user._id
    },
    process.env.TOKEN_SECRET
  )


  res.json({ error: null, data: { token } });
}