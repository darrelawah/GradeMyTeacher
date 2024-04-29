import React from 'react';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 96px)', marginTop: '-1in' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2em', marginBottom: '30px' }}>Signup Page</h1>
        <form style={{ width: '400px', textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="username" style={{ fontSize: '1.2em' }}>Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ fontSize: '1.2em' }}>Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ fontSize: '1.2em' }}>Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" style={{ fontSize: '1.2em', padding: '10px 20px', borderRadius: '5px' }}>Signup</button>
        </form>
        <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
          Already have an account?{' '}
          <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

