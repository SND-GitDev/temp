const bcrypt = require("bcrypt");
const User = require("./models/User");
const uuid = require("uuid");

exports.registerUser = async (req, res) => {
  const saltRounds = 10;
  req.body.password = await bcrypt.hash(req.body.password, saltRounds);

  const users = await User.find({ name: `${req.body.name}` });
  if (users.length > 0) {
    res.status(400).json({ error: "Name Already Taken..." });
  } else {
    const user = User(req.body);
    user.session = uuid.v4();
    const registeredUser = await user.save();
    res.status(201).json({ token: registeredUser.session });
  }
};

exports.logoutUser = async (req, res) => {
  const users = await User.find({ session: `${req.body.token}` });
  if (users.length > 0) {
    const user = users[0];
    user.session = null;
    await user.save();
  }
  res.status(200).json();
};
