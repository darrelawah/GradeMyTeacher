"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/backend/client';

const LoginPage = () => {
  const [formData, setFormData] = useState({ uname: '', pw: '' });
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { uname, pw } = formData;

    try {
      // Fetch user data from the database
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('uname', uname)
        .single();

      if (error) throw error;

      if (!data) {
        setError('User not found');
        return;
      }

      if (data.pw !== pw) {
        setError('Incorrect password');
        return;
      }

      // User authentication successful
      setUser(data.uname); // Set the logged-in user's username
      localStorage.setItem('user', data.uname); // Store user's session information

    } catch (error) {
      console.error('Error logging in:', error.message);
      setError('Error logging in');
    }
  };

  const handleLogout = () => {
    // Clear user session information
    localStorage.removeItem('user');
    setUser(null); // Clear the logged-in user
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Login Page</h1>
        {user && (
          <div style={styles.userInfo}>
            <p>Welcome, {user}</p>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </div>
        )}
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="uname" style={styles.label}>Username:</label>
            <input type="text" id="uname" name="uname" required aria-label="Username" style={styles.input} onChange={handleInputChange} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="pw" style={styles.label}>Password:</label>
            <input type="password" id="pw" name="pw" required aria-label="Password" style={styles.input} onChange={handleInputChange} />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        <p style={styles.signupLink}>
          Need an Account? {" "}
          <Link href="/signup" className='linkerOnDark'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};


const styles = {
  //css for the outside area around the login page box
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 96px)',
    marginTop: '-1in',
    background: '#202124',
  },

  //css for the box that contains the login page and its fields
  formContainer: {
    textAlign: 'center',
    background: '#2C2F33',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
  },

  //css for heading (login page)
  heading: {
    fontSize: '2em',
    marginBottom: '30px',
    color: '#FFFFFF',
  },

  //css for the form
  form: {
    width: '400px',
    textAlign: 'center',
    marginBottom: '20px',
  },

  //css for the input areas 
  inputGroup: {
    marginBottom: '20px',
  },

  //css for the input text boxes
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1em',
    borderRadius: '4px',
    border: '1px solid #8E9297',
    background: '#40444B',
    color: '#FFFFFF',
    boxSizing: 'border-box',
  },

  //css for button
  button: {
    fontSize: '1.2em',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#7289DA',
    color: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
  },

  //css for "Need an Account"
  signupLink: {
    fontSize: '1.2em',
    marginBottom: '20px',
    color: '#FFFFFF',
  },

  //css for "sign up link"
  link: {
    textDecoration: 'underline',
    color: '#7289DA',
  },

  //css for logout button
  logoutButton: {
    fontSize: '1.2em',
    padding: '3px 6px',
    borderRadius: '5px',
    backgroundColor: '#E91E63', // Change color to match your design
    color: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
  },
};

export default LoginPage;
