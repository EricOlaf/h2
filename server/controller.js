const getUser = (req, res, next) => {
  console.log(req.body);
  const db = req.app.get("db");
  db.getUser(req.body.user.username, req.body.user.password)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  getUser
};
