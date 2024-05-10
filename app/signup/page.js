import React from 'react';
import Link from 'next/link';

const SignupPage = () => {
  return (
    //containers to make sure formatting works as expected
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Signup Page</h1>
        <form style={styles.form}>
          {/* username input */}
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Username:</label>
            <input type="text" id="username" name="username" style={styles.input} required />
          </div>
          {/* email input */}
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input type="email" id="email" name="email" style={styles.input} required />
          </div>
          {/* school input */}
          <div style={styles.inputGroup}>
            <label htmlFor="school" style={styles.label}>School:</label>
            <input type="text" id="school" name="school" style={styles.input} required />
          </div>
          {/* password input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input type="password" id="password" name="password" style={styles.input} required />
          </div>
          {/* confirm password input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password_confirm" style={styles.label}>Confirm Password:</label>
            <input type="password" id="password_confirm" name="password_confirm" style={styles.input} required />
          </div>
          {/* submit button takes you to login page once account is created (will add a popup that says "account successfully created")) */}
          <Link href="/login">
            <button type="submit" style={styles.button}>Signup</button>
          </Link>
        {/* takes you to the login page if you already have an account */}
        </form>
        <p style={styles.loginLink}>
          Already have an account?{' '}
          <Link href="/login" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  ////css for the outside area around the login page box
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 96px)',
    marginTop: '-1in',
    background: '#202124',
  },

  //css for container of signup page
  formContainer: {
    textAlign: 'center',
    background: '#2C2F33',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
  },

  //signup page css
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

  //makes sure there is room between input fields
  inputGroup: {
    marginBottom: '20px',
  },

  //user/pass/school/etc. labels
  label: {
    fontSize: '1.2em',
    display: 'block',
    marginBottom: '5px',
    color: '#FFFFFF',
  },

  //css for input text boxes
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1.2em',
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

  //css for "already have asn account?"
  loginLink: {
    fontSize: '1.2em',
    marginBottom: '20px',
    color: '#FFFFFF',
  },

  //css for "Login" link
  link: {
    textDecoration: 'underline',
    color: '#7289DA',
  },
};

export default SignupPage;
