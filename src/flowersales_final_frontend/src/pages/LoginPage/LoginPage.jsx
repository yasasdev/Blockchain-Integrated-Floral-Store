import React from 'react'

const LoginPage = () => {
  return (
    <div class="login-container">
        <h1>Admin Login</h1>
        <form action="/login" method="POST" class="login-form">
            <h2>Welcome Back</h2>
            <div class="input-group">
                <input type="email" id="email" name="username" placeholder="Email" required />
            </div>
            <div class="input-group">
                <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <button type="submit">Login</button>
            <p class="signup-link">Don't have an account? <a href="/register">Sign up</a></p>
            <h3>Or</h3>
            <button type="button" class="google-button" id="google-login">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
                <path fill="#EA4335" d="M24 9.5c3.31 0 6.27 1.16 8.61 3.07l6.45-6.45C34.51 2.98 29.49 1 24 1 14.61 1 6.67 5.98 2.69 12.9l7.8 6.07C12.61 12.28 17.82 9.5 24 9.5z" />
                <path fill="#34A853" d="M24 44c5.2 0 9.83-1.73 13.55-4.68l-7.08-6.34C28.02 34.64 26.13 35 24 35c-5.03 0-9.3-3.23-10.87-7.75L5.25 33.5C9.34 40.02 16.15 44 24 44z" />
                <path fill="#4A90E2" d="M43.46 20H24v8.62h11.05C33.18 31.74 30.33 34 24 34c-3.31 0-6.27-1.16-8.61-3.07l-6.45 6.45C13.49 40.02 18.51 42 24 42c9.39 0 17.33-4.98 21.31-11.9l-7.85-6.1z" />
                <path fill="#FBBC05" d="M24 8c-5.18 0-9.94 2.12-13.41 5.59L5.59 8.18C9.74 3.43 16.54 0 24 0c6.85 0 13.12 2.54 18.1 6.91L33.5 13.74C30.97 10.96 27.51 8 24 8z" />
                </svg>
                Continue with Google
            </button>    
        </form>
    </div>
  )
}

export default LoginPage