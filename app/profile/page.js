"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/backend/client';


const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the logged-in user's username from localStorage
        const loggedInUser = localStorage.getItem('user');
        if (!loggedInUser) {
          setError('User not logged in');
          return;
        }

        // Fetch user data from the database based on username
        const { data, error } = await supabase
          .from('users')
          .select('uname, email, universityid')
          .eq('uname', loggedInUser)
          .single();

        if (error) {
          throw error;
        }

        if (!data) {
          setError('User not found');
          return;
        }

        // Fetch university name using the university ID
        const universityName = await fetchUniversityName(data.universityid);

        setUser({
          username: data.uname,
          email: data.email,
          universityName: universityName,
        });
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, []);

  const fetchUniversityName = async (universityId) => {
    try {
      const { data, error } = await supabase
        .from('university')
        .select('universityName')
        .eq('uid', universityId)
        .single();
      
      if (error) {
        throw error;
      }

      return data ? data.universityName : null;
    } catch (error) {
      console.error('Error fetching university name:', error.message);
      return null;
    }
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.container}>
          <h2 style={styles.heading}> Profile</h2>
          {error && <p style={styles.error}>Error: {error}</p>}
          {user && (
            <div style={styles.content}>
              <p style={styles.welcome}>Welcome to your profile page!</p>
              <div style={styles.userInfo}>
                <h4 style={styles.subHeading}>User Information</h4>
                <ul style={styles.list}>
                  <li style={styles.listItem}><strong>Username:</strong> {user.username}</li>
                  <li style={styles.listItem}><strong>Email:</strong> {user.email}</li>
                  <li style={styles.listItem}><strong>University:</strong> {user.universityName}</li>
                  <li style={styles.listItem}><strong>Role:</strong> Student</li>
                </ul>
              </div>
            </div>
          )}
        </div>
                {/* Grades Box */}
                <div style={styles.container}>
          <h2 style={styles.heading}>Grades</h2>
          <div style={styles.content}>
            <h3 style={styles.largeBottomMargin}>Recent grades you have gotten/given:</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>Graded Teacher1: grade, comment</li>
              <li style={styles.listItem}>Graded Teacher2: grade, comment</li>
              <li style={styles.listItem}>Graded Teacher3: grade, comment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS styles
const styles = {
  outerContainer: {
    background: '#202124',
    paddingTop: '20px',
  },

  //formatting for outer boxes of the profile/grades sections 
  innerContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },

  //formatting for inbetween boxes in profile/user information
  container: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    background: '#2C2F33',
  },

  //css for profile and grades headings
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#d3d3d3',
  },

  //css for inner boxes in profile/grades (the sport where all the text is)
  content: {
    padding: '20px',
    background: '#36454F',
    borderRadius: '5px',
    overflow: 'auto',
  },

  //css for the welcome line
  welcome: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#FFFFFF',
  },

  //css for user information in the list elements
  userInfo: {
    marginBottom: '20px',
  },

  // css for sub headings (only user information for now)
  subHeading: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#FFFFFF',
  },

  //css for the list
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },

  //css for the list items
  listItem: {
    display: 'block',
    marginBottom: '10px',
  },

  //css to increase bottom margin sizes when needed
  largeBottomMargin: {
    marginBottom: '25px',
  },
};

export default ProfilePage;
