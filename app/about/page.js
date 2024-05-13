import React from 'react';

const AboutUsPage = () => {
  return (
    //contains the page and makes sure formatting works as expected
    <div className='outerContainer'>
      <main className='mainAbout'>
        <h1 className='twoemHeading'>About Us</h1>
        <div className='contentAbout'>
          {/* smaller container for the text of the page to ensure the formatting works properly*/}
          <div className='textContainer'>
            <h2 style={styles.subheading}>Our Mission</h2>
            <p style={styles.info2}>We believe in helping both students and teachers through accurate and thoughtful grading of professors, classes, and universities. Students will give ratings to allow incoming students proper information in what to expect for a given program or class given a certain professor. This feedback will also help professors to properly edit their courses as needed!</p>
            <h2 style={styles.subheading}>Our Team</h2>
            <p className='infoAbout'>Meet our dedicated team members who work tirelessly to provide the best experience for our users.</p>

            <div style={styles.teamMembers}>
              {/* These are our team members */}
              <div className='teamMember'>
                <h3 className='memberName'>Darrel</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>

              <div className='teamMember'>
                <h3 className='memberName'>Karson</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>
              
              <div className='teamMember'>
                <h3 className='memberName'>Joshua</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>

              <div className='teamMember'>
                <h3 className='memberName'>Anukrati</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>

              <div className='teamMember'>
                <h3 className='memberName'>Allan</h3>
                <p style={styles.memberInfo}>Role: Developer</p>
                <p style={styles.memberInfo}>Experience Level: COSC484</p>
              </div>
              
              <div className='teamMember'>
                <h3 className='memberName'>Jae</h3>
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
  subheading: {
    fontSize: '1.5em',
    marginBottom: '20px',
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
  memberInfo: {
    fontSize: '1em',
    marginBottom: '10px',
  },
};

export default AboutUsPage;
