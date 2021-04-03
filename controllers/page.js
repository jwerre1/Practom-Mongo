const User = require('../model/User');

exports.mainPage = async (req, res, next) => {
  await User.findOne({ '_id': req.user.id }, (error, user) => {
    if (error) return res.status(400).json({ error });
    res.json({
      error: null,
      data: {
        title: "Practom",
        content: "Let's get practicing!",
        user: {
          sets: user.sets,
          name: user.name,
          id: user.id
        }
      }
    });
  });
}