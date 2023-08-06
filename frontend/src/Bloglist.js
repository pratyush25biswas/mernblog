

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = props => (
  <div className="blog-preview">
    <h2>Title: {props.blog.title}</h2>
    <p>Body: {props.blog.body}</p>
    <p>Author: {props.blog.author}</p>
    <p>Likes: {props.blog.likes}</p>
    <p>Dislikes: {props.blog.dislikes}</p>
    
    <p>
      
        <button><a href="#" onClick={() => { props.deleteBlog(props.blog._id) }}>delete</a></button>
        <emsp/> <button>like</button> <emsp/> 
        <button>dislike</button>
    </p>
  </div>
)

export default class Bloglist extends Component {
  constructor(props) {
    super(props);

    this.deleteBlog = this.deleteBlog.bind(this)

    this.state = {blogs: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogs/')
      .then(response => {
        this.setState({ blogs: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBlog(id) {
    axios.delete('http://localhost:5000/blogs/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      blogs: this.state.blogs.filter(el => el._id !== id)
    })
  }

  blogList() {
    return this.state.blogs.map(currentblog => {
      return <Blog blog={currentblog} deleteBlog={this.deleteBlog} key={currentblog._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h2>All blogs</h2>
        { this.blogList() }
      </div>
    )
  }
}

