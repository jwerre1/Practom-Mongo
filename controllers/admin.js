const Set = require('../model/Set');

exports.addSet = async (req, res, next) => {
  const set = new Set({
    title: req.body.title,
    author: req.user.id
  })

  try {
    const savedSet = await set.save();
    res.json({ error: null, data: savedSet })
  } catch (error) {
    res.status(400).json({ error });
  }
}