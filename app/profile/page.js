import React from 'react';

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
                {/* user information (will have to pull it from database)*/}
                <li style={styles.listItem}><strong>Username:</strong> JohnDoe</li>
                <li style={styles.listItem}><strong>Email:</strong> johndoe@example.com</li>
                <li style={styles.listItem}><strong>Role:</strong> Student/Teacher</li>
                <li style={styles.listItem}><strong>School:</strong> School Attending</li>
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
              {/* grading/rating information (will have to pull it from database)*/}
              <li style={styles.listItem}><strong>Graded Teacher1:</strong> Teacher Link (or classes graded if professor)</li>
              <li style={styles.listItem}><strong>Graded Teacher2:</strong> Teacher Link (or classes graded if professor)</li>
              <li style={styles.listItem}><strong>Graded Teacher3:</strong> Teacher Link (or classes graded if professor)</li>
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
