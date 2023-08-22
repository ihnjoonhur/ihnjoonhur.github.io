import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');  
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
                <h2>Register</h2>
              <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input 
                    value={name} 
                    name="name" 
                    id="name" 
                    placeholder="Full Name"
                    onChange={e => setName(e.target.value)} // Added onChange
                />
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
                <button type="submit">Register</button> {/* Changed label */}
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Already have an account? Login here.</button>
        </div>
    )
}
