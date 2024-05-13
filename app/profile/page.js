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
    <div className='outerContainer'>
      <div style={styles.innerContainer}>
        <div style={styles.container}>
          <h2 style={styles.heading}> Profile</h2>
          {error && <p style={styles.error}>Error: {error}</p>}
          {user && (
            <div className='contentHolder'>
              <p style={styles.welcome}>Welcome to your profile page!</p>
              <div style={styles.userInfo}>
                <h4 style={styles.subHeading}>User Information</h4>
                <ul style={styles.list}>
                  <li className='listItem'><strong>Username:</strong> {user.username}</li>
                  <li className='listItem'><strong>Email:</strong> {user.email}</li>
                  <li className='listItem'><strong>University:</strong> {user.universityName}</li>
                  <li className='listItem'><strong>Role:</strong> Student</li>
                </ul>
              </div>
            </div>
          )}
        </div>
          {/* Grades Box */}
          <div className='containerUsPr'>
          <h2 style={styles.heading}>Grades</h2>
          <div className='contentHolder'>
            <h3 className='h3LargeBottomMargin'>Recent grades you have gotten/given:</h3>
            <ul style={styles.list}>
              <li className='listItem'>Graded Teacher1: grade, comment</li>
              <li className='listItem'>Graded Teacher2: grade, comment</li>
              <li className='listItem'>Graded Teacher3: grade, comment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS styles
const styles = {

  //formatting for outer boxes of the profile/grades sections 
  innerContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },

  //css for profile and grades headings
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
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

};

export default ProfilePage;
