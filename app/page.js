import React from 'react';
import Link from 'next/link'; 

const HomePage = () => {
  return (
    //formatting for the overall page
    <div style={styles.outerContainer}>
      <main style={styles.main}>
        <h1 style={styles.heading}>Welcome to Grade My Teacher!</h1>
        <div style={styles.content}>
          {/* makes sure that the text is formatted properly*/}
          <div style={styles.textContainer}>
            <p style={styles.subheading}>Discover amazing features, Get quality ratings to help make informed decisions, and more!</p>
            <p style={styles.info}>some info here or something</p>
            <p style={styles.info}>some infor here or something</p>
            <p style={styles.info}>IDK maybe we have more info? who knows</p> 
            
            {/* adding the text "New Grade" */}
            <p style={styles.newGradeText}>New Grade</p>
            
            {/* adding the buttons for professor, course, and university */}
            <div style={styles.buttonContainer}>
              <Link href="/rating/professor">
                <button style={styles.button}>Professor</button>
              </Link>
              <Link href="/rating/course">
                <button style={styles.button}>Course</button>
              </Link>
              <Link href="/rating/university">
                <button style={styles.button}>University</button>
              </Link>
            </div>
          </div>
          {/* makes sure the picture is formatted properly*/} 
          <div style={styles.imageContainer}>
            <img src="https://img.freepik.com/premium-vector/lineart-illustration-reading-book-black-background-also-suitable-logos_645919-119.jpg" alt="from freepik" style={styles.image} />
          </div>
        </div>
      </main>
    </div>
  );
};

// CSS styles
const styles = {
  outerContainer: {
    background: '#202124', // Dark grey background
    minHeight: 'calc(100vh - 96px)', // Adjust for footer height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  //helps with our formatting for the main page
  main: {
    textAlign: 'center',
    color: '#FFFFFF',
    width: '90%',
    maxWidth: '1200px',
    padding: '0 20px',
  },

  //heading css
  heading: {
    fontSize: '2em',
    marginBottom: '10px',
  },

  //css for our content
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
  },

  //css for our text to make sure it stays where we want it
  textContainer: {
    width: '45%', // 45% of the content width
  },

  //css to make sure image stays within the space we want it
  imageContainer: {
    width: '45%', // 45% of the content width
  },

  //makes sure our image fits properly in its container
  image: {
    width: '100%', 
    borderRadius: '5px', 
  },

  //css for subheading
  subheading: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },

  //css for our informational bits/selling points
  info: {
    fontSize: '1.2em',
    lineHeight: '1.6',
  },

  //css for the "New Grade" text
  newGradeText: {
    fontSize: '1.5em',
    marginBottom: '20px',
    color: '#7289DA',
    marginTop: '20px', // Add margin-top to create a line break
  },

  //css for the container of buttons
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  //css for the buttons
  button: {
    backgroundColor: '#7289DA',
    color: '#FFFFFF',
    padding: '12px 16px',
    fontSize: '1.2em',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px', // Adjust spacing between buttons
  },

};

export default HomePage;
