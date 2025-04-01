import React, { useState } from 'react';

function AdminPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real application, you would validate credentials against a backend
    // This is just a simple demonstration
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-portal">
      <h2>Admin Portal</h2>
      <div className="admin-dashboard">
        <div className="admin-sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Customers</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="admin-content">
          <h3>Welcome to the Admin Dashboard</h3>
          <p>Here you can manage your products, orders, and customer information.</p>
          
          <div className="stats-container">
            <div className="stat-box">
              <h4>Total Orders</h4>
              <p className="stat-number">156</p>
            </div>
            <div className="stat-box">
              <h4>Products</h4>
              <p className="stat-number">48</p>
            </div>
            <div className="stat-box">
              <h4>Customers</h4>
              <p className="stat-number">230</p>
            </div>
            <div className="stat-box">
              <h4>Revenue</h4>
              <p className="stat-number">$12,450</p>
            </div>
          </div>
          
          <div className="recent-orders">
            <h4>Recent Orders</h4>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1245</td>
                  <td>John Doe</td>
                  <td>March 21, 2025</td>
                  <td>$75.00</td>
                  <td>Delivered</td>
                </tr>
                <tr>
                  <td>#1244</td>
                  <td>Jane Smith</td>
                  <td>March 20, 2025</td>
                  <td>$120.00</td>
                  <td>Processing</td>
                </tr>
                <tr>
                  <td>#1243</td>
                  <td>Robert Johnson</td>
                  <td>March 20, 2025</td>
                  <td>$45.00</td>
                  <td>Shipped</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button onClick={() => setIsLoggedIn(false)} className="logout-btn">Logout</button>
    </div>
  );
}

export default AdminPortal;