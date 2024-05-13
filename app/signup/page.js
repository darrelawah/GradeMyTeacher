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
    //containers to make sure formatting works as expected
    <div className='outerContainer'>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Signup Page</h1>
        {!registrationSuccess ? (
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="uname">Username:</label>
              <input type="text" id="uname" name="uname" onChange={handleInputChange} required />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" onChange={handleInputChange} required />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="university">University:</label>
              <input type="text" id="university" name="university" onChange={handleInputChange} required />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="pw">Password:</label>
              <input type="password" id="pw" name="pw" onChange={handleInputChange} required />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="pwConfirm">Confirm Password:</label>
              <input type="password" id="pwConfirm" name="pwConfirm" onChange={handleInputChange} required />
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
          <Link href="/login" className='linkerOnDark'>Login</Link>
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

};

export default SignupPage;
