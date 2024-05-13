import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    //container makes sure formatting works as expected
    <div className='outerContainer'>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Login</h1>
        <form style={styles.form}>
          {/* username input */}
          <div style={styles.inputGroup}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required aria-label="Username"/>
          </div>
          {/* password input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required aria-label="Password"/>
          </div>
          {/* submit button (will take you to profile on submit) */}
          <Link href='/profile'>
            <button type="submit" style={styles.button}>Login</button>
          </Link>
        {/* takes you to signup page if you need an account */}
        </form>
        <p style={styles.signupLink}>
          Need an Account? {" "}
          <Link href="/signup" className='linkerOnDark'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {

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
};

export default LoginPage;
