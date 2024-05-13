import React from 'react';
import Link from 'next/link';

const SignupPage = () => {
  return (
    //containers to make sure formatting works as expected
    <div className='outerContainer'>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Signup</h1>
        <form style={styles.form}>
          {/* username input */}
          <div style={styles.inputGroup}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          {/* email input */}
          <div style={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          {/* school input */}
          <div style={styles.inputGroup}>
            <label htmlFor="school">School:</label>
            <input type="text" id="school" name="school" required />
          </div>
          {/* password input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          {/* confirm password input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password_confirm">Confirm Password:</label>
            <input type="password" id="password_confirm" name="password_confirm" required />
          </div>
          {/* submit button takes you to login page once account is created (will add a popup that says "account successfully created")) */}
          <Link href="/login">
            <button type="submit" style={styles.button}>Signup</button>
          </Link>
        {/* takes you to the login page if you already have an account */}
        </form>
        <p style={styles.loginLink}>
          Already have an account?{' '}
          <Link href="/login" className='linkerOnDark'>Login</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
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
