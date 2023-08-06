const router = require('express').Router();
let Blog = require('../blogmodel');

router.route('/').get((req, res) => {
  Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const author = req.body.author;
  const likes =0;
  const dislikes =0;

  const newBlog = new Blog({title,author,body,likes,dislikes});

  newBlog.save()
    .then(() => res.json('Blog added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//
router.route('/:id').get((req, res) => {
    Blog.findById(req.params.id)
      .then(blog => res.json(blog))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/:id').delete((req, res) => {
    Blog.findByIdAndDelete(req.params.id)
      .then(() => res.json('Blog deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Blog.findById(req.params.id)
      .then(blog => {
        blog.title = req.body.title;
        blog.body = req.body.body;
        blog.author = req.body.author;
        
  
        blog.save()
          .then(() => res.json('blog updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
//

module.exports = router;