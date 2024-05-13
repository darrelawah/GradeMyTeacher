"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from "@/backend/client";


const SignupPage = () => {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    university: '',
    pw: '',
    pwConfirm: ''
  });
  const [maxUserId, setMaxUserId] = useState(0);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    fetchMaxUserId();
  }, []);

  const fetchMaxUserId = async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('userid', { count: 'exact' })
        .order('userid', { ascending: false })
        .limit(1);

      if (error) {
        throw error;
      }

      if (data.length > 0) {
        setMaxUserId(data[0].userid);
      }
    } catch (error) {
      console.error('Error fetching max user ID:', error.message);
    }
  };

  const checkUsernameExists = async (username) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('uname')
        .eq('uname', username)
        .single();
      if (error) {
        throw error;
      }
      return data !== null;
    } catch (error) {
      console.error('Error checking username existence:', error.message);
      return false;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.pw !== formData.pwConfirm) {
      alert("Passwords do not match!");
    } else {
      try {
        const universityId = await fetchUniversityId(formData.university);
        if (!universityId) {
          alert("University not found!");
          return;
        }
  
        // Check if username already exists
        const usernameExists = await checkUsernameExists(formData.uname);
        if (usernameExists) {
          alert("Username already exists!");
          return;
        }
  
        const newUserId = maxUserId + 1;
  
        const { data, error } = await supabase
          .from('users')
          .insert([
            {
              userid: newUserId,
              uname: formData.uname,
              email: formData.email,
              universityid: universityId,
              pw: formData.pw
            }
          ])
          .select('*');
  
        if (error) {
          throw error;
        }
  
        console.log('User successfully registered:', data);
        setRegistrationSuccess(true); // Set registration success to true
  
      } catch (error) {
        console.error('Error registering user:', error.message);
        // Handle error
      }
    }
  };
  

  const fetchUniversityId = async (universityName) => {
    try {
      const { data, error } = await supabase
        .from('university')
        .select('uid')
        .eq('universityName', universityName)
        .single();
      if (error) {
        throw error;
      }
      return data ? data.uid : null;
    } catch (error) {
      console.error('Error fetching university ID:', error.message);
      return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Signup Page</h1>
        {!registrationSuccess ? (
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="uname" style={styles.label}>Username:</label>
              <input type="text" id="uname" name="uname" style={styles.input} onChange={handleInputChange} required />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email:</label>
              <input type="email" id="email" name="email" style={styles.input} onChange={handleInputChange} required />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="university" style={styles.label}>University:</label>
              <input type="text" id="university" name="university" style={styles.input} onChange={handleInputChange} required />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="pw" style={styles.label}>Password:</label>
              <input type="password" id="pw" name="pw" style={styles.input} onChange={handleInputChange} required />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="pwConfirm" style={styles.label}>Confirm Password:</label>
              <input type="password" id="pwConfirm" name="pwConfirm" style={styles.input} onChange={handleInputChange} required />
            </div>
            <button type="submit" style={styles.button}>Signup</button>
          </form>
        ) : (
          <p style={{ ...styles.registrationSuccessMessage, fontSize: '1.5em' }}>
            User successfully registered!{' '}
            <Link href="/login" style={styles.link}>Click here to login</Link>
          </p>
        )}
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
