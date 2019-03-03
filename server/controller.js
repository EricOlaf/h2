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

const posted = (req, res, next) => {
  const db = req.app.get("db");
  console.log(req.body);
  db.posted([req.body[2], req.body[0], req.body[1]])
    .then(res.status(200))
    .catch(err => console.log(err));
};

const deleted = (req, res, next) => {
  const db = req.app.get("db");
  console.log([req.params.id]);
  db.deleted([req.params.id])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const editPost = (req, res, next) => {
  const db = req.app.get("db");
  db.editPost([req.params.id, req.body.changedTitle, req.body.changedContent])
    .then(res.status(200))
    .catch(err => console.log(err));
};

module.exports = {
  getUser,
  getPosts,
  posted,
  deleted,
  editPost
};
