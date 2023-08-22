import React, { useState } from "react";

export const Login = (props) => { // Added props as an argument
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');  

    const handleSubmit = (e) => { // Passed 'e' as an argument
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
                <h2>Login</h2>
           <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input 
                    type="email" 
                    placeholder="email@gmail.com" 
                    id="email" 
                    name="email"
                    value={email} // Added value
                    onChange={e => setEmail(e.target.value)} // Added onChange
                />
                <label htmlFor="password">password</label>
                <input 
                    type="password" 
                    placeholder="********" 
                    id="password" 
                    name="password"
                    value={pass} // Added value
                    onChange={e => setPass(e.target.value)} // Added onChange
                />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
