import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from  'axios';

export const Register = () => {
    const [formdata,setformdata]= useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const{name, email,password,password2} = formdata;

    const onChange = e =>setformdata({...formdata, [e.target.name]:e.target.value})

    const onSubmit =async e =>{
        e.preventDefault();
        if(password !==password2){
            alert("Password doesnot match");
        }
        else{
            //console.log(formdata);
            const newUser ={
                name,email,password
            }
            try{
                const config = {
                    headers: {
                        'Content-Type':'application/json'
                    }
                }

                const body=JSON.stringify(newUser);

                const res = await axios.post('/api/user/signup',body,config);
                console.log(res.data)
            }
            catch(err){
                console.log(err.response.data);
            }
        }
    }


    return (
        <div>
             <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e =>onSubmit(e)}>
            
            <div className="form-group">
            <input type="text" 
            placeholder="Name" 
            value={name}
            name="name"
            onChange={e =>onChange(e)}
            required />
            </div>

            <div className="form-group">
            <input type="email"
             placeholder="Email Address"
             name="email"
             value={email}
             onChange={e =>onChange(e)}
             required />
            </div>

            <div className="form-group">
            <input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            minLength="6"
            onChange={e =>onChange(e)}
            required/>
            </div>
            
            <div className="form-group">
            <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            name="password2"
            minLength="6"
            onChange={e =>onChange(e)}
            required/>
            
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
            </p>
            </section>
            </div>
    )
}

export default Register