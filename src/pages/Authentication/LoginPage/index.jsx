import React, { useState } from "react";
import footer_img from '../../../assets/images/footer_img.png';
import './styles.scss';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
        console.log({ email, password, rememberMe });
    };

    return (
        <div className="signin-container">
            <div>
                <div className="signin_heading">Sign In</div>
                <form className="signin-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <button type="submit" className="signin-button">Sign In</button>
                </form>
            </div>
            <img src={footer_img} alt="Footer" className="footer-img" />
        </div>
    )
}

export default LoginPage;
