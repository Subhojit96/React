import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

 const Login = () => {
    const [formdata, setformdata]=useState({
        email:'',
        password:''
    });

    const {email,password}=formdata;

    const onChange = e =>setformdata({...formdata, [e.target.name]:e.target.value})

    const onSubmit = e =>{
        e.preventDefault();
        console.log(formdata);
        const body=JSON.stringify(formdata)
        axios.post('/user/login',body)
        .then(response => console.log(response))
        .catch(err => console.log(err));        
    }

    return (
        <div>
            <section  className="container">
            
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
            
            <form className="form" onSubmit={e =>onSubmit(e)}>
            <div className="form-group">
            
            <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e =>onChange(e)}
            required/>
            </div>
            
            <div className="form-group">
            <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e =>onChange(e)}
            required/>
            </div>
            
            <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
            </section>
        </div>
    )
}

export default Login