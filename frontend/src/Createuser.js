
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Createuser extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeAuthor=this.onChangeAuthor.bind(this);
        this.onChangePwd=this.onChangePwd.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state= {
            password: "",
            username : ""
            
        }
    }

    onChangeAuthor(e) {
        this.setState({
            username : e.target.value
        });
    }

    onChangePwd(e) {
        this.setState({
            password : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const authpwd= {
            username: this.state.username,
            password: this.state.password
            
        }

        console.log(authpwd);
        
        
       
       
        axios.post('https://pratyushrajbiswas.onrender.com/users/add', authpwd, {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        window.location= '/create';
    }

    render(){
        return(
            <div className="signup">
            <h2>Create New user</h2>
            <form onSubmit={this.onSubmit}>
              
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeAuthor}
                    />
              </div>
              <div className="form-group"> 
                <label>Password: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePwd}
                    />
              </div>
                <button type="submit"  >Sign Up</button>
         
            </form>
          </div>
          )
        }
    }

