// import React from 'react'
//import styles from "../page.module.css";

// export default function Login() {
//   return (
//     <main className={styles.main}>
//         <div className={styles.description}>
//             <div>
//                 <p>Login</p>
//                 <p>Test</p>
//             </div>
//         </div>
//     </main>
//   )
// }
// pages/login.js

import styles from "../page.module.css";
import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
