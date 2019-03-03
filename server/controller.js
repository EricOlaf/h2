const getUser = (req, res, next) => {
  console.log(req.body);
  const db = req.app.get("db");
  db.getUser([req.body.username, req.body.password])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const getPosts = (req, res, next) => {
  const db = req.app.get("db");
  db.getPosts()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  getUser,
  getPosts
};
