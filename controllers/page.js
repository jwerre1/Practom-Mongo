exports.mainPage = (req, res, next) => {
  res.json({
    error: null,
    data: {
      title: "Practom",
      content: "Let's get practicing!",
      user: req.user
    }
  });
}