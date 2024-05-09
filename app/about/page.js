import React from 'react';

const AboutUsPage = () => {
  return (
    //contains the page and makes sure formatting works as expected
    <div style={styles.outerContainer}>
      <main style={styles.main}>
        <h1 style={styles.heading}>About Us</h1>
        <div style={styles.content}>
          {/* smaller container for the text of the page to ensure the formatting works properly*/}
          <div style={styles.textContainer}>
            <h2 style={styles.subheading}>Our Mission</h2>
            <p style={styles.info2}>We believe in helping both students and teachers through accurate and thoughtful grading of professors, classes, and universities. Students will give ratings to allow incoming students proper information in what to expect for a given program or class given a certain professor. This feedback will also help professors to properly edit their courses as needed!</p>
            <h2 style={styles.subheading}>Our Team</h2>
            <p style={styles.info}>Meet our dedicated team members who work tirelessly to provide the best experience for our users.</p>

            <div style={styles.teamMembers}>
              {/* These are our team members */}
              <div style={styles.teamMember}>
                <h3 style={styles.memberName}>Darrel </h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>
             
              <div style={styles.teamMember}>
                <h3 style={styles.memberName}>Karson</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>
              
              <div style={styles.teamMember}>
                <h3 style={styles.memberName}>Joshua</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>

              <div style={styles.teamMember}>
                <h3 style={styles.memberName}>Name </h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>
             
              <div style={styles.teamMember}>
                <h3 style={styles.memberName}>Name</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>
              
              <div style={styles.teamMember}>
                <h3 style={styles.memberName}>Name</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>

              <div style={styles.teamMember}>
                <h3 style={styles.memberName}>Name</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// CSS styles
const styles = {
  outerContainer: {
    background: '#202124', 
    minHeight: 'calc(100vh - 96px)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    textAlign: 'center',
    color: '#FFFFFF', 
    width: '90%', 
    maxWidth: '1200px', 
    padding: '0 20px', 
  },
  heading: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px', 
  },
  textContainer: {
    width: '100%', 
  },
  subheading: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  info: {
    fontSize: '1.2em',
    lineHeight: '1.6',
  },

  info2: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  teamMembers: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px', 
    flexWrap: 'wrap', 
  },
  teamMember: {
    width: 'calc(25% - 20px)', 
    margin: '0 10px 20px', 
  },
  memberName: {
    fontSize: '1.2em',
    marginBottom: '5px',
  },
  memberInfo: {
    fontSize: '1em',
    marginBottom: '10px',
  },
};

export default AboutUsPage;
