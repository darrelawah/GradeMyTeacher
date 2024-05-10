import React from 'react';
import Link from 'next/link';

// dummy arrays to simulate database
const users = [
  {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    role: 'Student/Teacher',
    school: 'School Attending'
  },
];

const recentGrades = [
  {
    teacher: 'Teacher1',
    grade: 'grade',
    comment: 'comment',
  },
  {
    teacher: 'Teacher2',
    grade: 'grade',
    comment: 'comment',
  },
  {
    teacher: 'Teacher3',
    grade: 'grade',
    comment: 'comment',
  }
];

const ProfilePage = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        {/* Profile Box */}
        <div style={styles.container}>
          <h2 style={styles.heading}>Profile</h2>
          <div style={styles.content}>
            <p style={styles.welcome}>Welcome to your profile page!</p>
            <div style={styles.userInfo}>
              <h4 style={styles.subHeading}>User Information</h4>
              <ul style={styles.list}>
                {/* user information (will have to pull it from database rather than array)*/}
                {users.map((user, index) => (
                  <li key={index} style={styles.listItem}>
                    <strong>Username:</strong> {user.username}<br />
                    <strong>Email:</strong> {user.email}<br />
                    <strong>Role:</strong> {user.role}<br />
                    <strong>School:</strong> {user.school}
                  </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div style={styles.container}>
          <h2 style={styles.heading}>Grades</h2>
          <div style={styles.content}>
            <h3 style={styles.largeBottomMargin}>Recent grades you have gotten/given: </h3>
            <ul style={styles.list}>
              {/* grading/rating information (will have to pull it from database rather than from array)*/}
              {recentGrades.map((grade, index) => (
                <li key={index} style={styles.listItem}>
                  <strong>Graded {grade.teacher}:</strong> <strong>{grade.grade}</strong>, { grade.comment}
                </li>
              ))}
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
