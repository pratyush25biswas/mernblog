
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Createblog extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeAuthor=this.onChangeAuthor.bind(this);
        this.onChangeBody=this.onChangeBody.bind(this);
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state= {
            title : '',
            body : '',
            author : '',
            likes : 0,
            dislikes : 0,
            authors: []
        }
    }



    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                authors: response.data.map(user => user.username),
                author: response.data[0].username
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }

    onChangeTitle(e) {
        this.setState({
            title : e.target.value
        });
    }

    //
    

    onChangeBody(e) {
        this.setState({
            body : e.target.value
        });
    }

    onChangeAuthor(e) {
        this.setState({
            author : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const blog= {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
        }

        console.log(blog);

        
        axios.post('http://localhost:5000/blogs/add', blog, {
            headers: {
              'Content-Type': 'application/json'
            }
        })

        window.location= '/';
    }

    render(){
        return(
            <div className="signup">
            <h2>Create new blog</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Author: </label>
                <select 
                    required
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChangeAuthor}>
                    {
                      this.state.authors.map(function(author) {
                        return <option key={author} value={author}>
                            {author}
                          </option>;
                      })
                    }
                </select>
              </div>
              
              <div className="form-group"> 
                <label>Title: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
              </div>
              <div className="form-group"> 
                <label>Body: </label>
                <textarea  type="text"
                    required
                    className="form-control"
                    value={this.state.body}
                    onChange={this.onChangeBody}
                    />
              </div>
              
      
              
                <button type="submit" >Create blog</button>
              
            </form>
          </div>
          )
        }
    }

