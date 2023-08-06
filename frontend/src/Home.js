
import { useState } from "react";

const Home = () => {

  const [Title, setTitle] = useState('');
  const [Body, setBody] = useState('');
  const [Author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newblogs=[];
    for(var k = 0 ; k < blogs.length ; k++){
      newblogs[k]=blogs[k];
    }
    
    const L= blogs.length;
    const Likes=Math.floor(Math.random() * 11);
    const Dislikes=Math.floor(Math.random() * 11);
    const Id=L;

    newblogs[L]={};
    newblogs[L].id=Id;
    newblogs[L].title=Title;
    newblogs[L].author=Author;
    newblogs[L].body=Body;
    newblogs[L].likes=Likes;
    newblogs[L].dislikes=Dislikes;
    //console.log(newblogs);
    setBlogs(newblogs);

    

  }

  var [blogs,setBlogs]= useState(
    [
      {
        title: "first blog",
        body: "Welcome",
        author: "me",
        likes:10,
        dislikes:12,
        id: 0
      },
      {
        title: "second blog",
        body: "hello",
        author: "you",
        likes:2,
        dislikes:1,
        id: 1
      }
    ]
  );

  const deleteblog = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);

  }

  const likeblog = (bid) =>{
    console.log(blogs);
    const newblogs=[];
    for(var i = 0 ; i < blogs.length ; i++){
      
      if ((blogs[i]["id"])===bid) {
        blogs[bid].likes++;
        console.log(blogs[bid]);
      }

      

    }

    for(var j = 0 ; j < blogs.length ; j++){
      newblogs[j]=blogs[j];
    }
    
    setBlogs(newblogs);
  }

  const dislikeblog = (bid) =>{
    const newblogs=[];
    for(var i = 0 ; i < blogs.length ; i++){
      
      if ((blogs[i]["id"])===bid) {
        blogs[bid]["dislikes"]++;
        console.log(blogs[bid]);
      }

    }

    for(var j = 0 ; j < blogs.length ; j++){
      newblogs[j]=blogs[j];
    }
    
    setBlogs(newblogs);
  }

  return (
    <div className="home">
      <div>
      
      <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={Body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
          type="text" 
          required 
          value={Author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Add Blog</button>
      </form>
    </div>

      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <p>Content: { blog.body }</p>
          <br/>
          <p>Likes: { blog.likes } 
          <button onClick={() => likeblog(blog.id) }> like </button>
          </p>
          <br/>
          <p>Dislikes: { blog.dislikes } 
          <button onClick={() => dislikeblog(blog.id) }> dislike </button>
          </p><br/>
          <button onClick={() => deleteblog(blog.id) }> delete </button>
          
        </div>
        
      ))}
    </div>
    </div>
    

    

  );
}
 
export default Home;