const express = require('express');
const app = express();
const port = 8000; 


app.use((req, res, next) => {
    console.log("Foi");
  next();
});

let n_posts_criados=2;
const database = {
  posts: [
    {
      id: 1,
      title: 'First Post',
      content: 'This is the first post.',
     
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the second post.',
    }
  ]
};


app.get('/', function(req, res){
    res.send("Hello world!");
 });

app.get('/posts', (req, res) => {
  res.json(database.posts);
});


app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = database.posts.find(p => p.id === postId);

  if (!post) {
    res.status(404).json({ error: 'Post not found' });
  } else {
    res.json(post);
  }
});


app.post('/posts', express.json(), (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: n_posts_criados + 1,
    title,
    content,
  };

  n_posts_criados++;
  database.posts.push(newPost);
  res.json(database.posts);
});


app.put('/posts/:id', express.json(), (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content} = req.body;

  const postIndex = database.posts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    res.status(404).json({ error: 'Post not found' });
  } else {
    const updatedPost = { id: postId, title, content};
    database.posts[postIndex] = updatedPost;
    res.json(database.posts);
  }
});

app.delete('/posts/:id',express.json(),(req,res)=>{
    const postId = parseInt(req.params.id);
    const postIndex = database.posts.findIndex(p => p.id == postID);
    if(postIndex==-1){
        res.status(404).json({error: 'Post not foound' });
    }else{
        database.posts.splice(postIndex, 1);
    }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
