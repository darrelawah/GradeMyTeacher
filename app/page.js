import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import eyeCatch from './Assets/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg'
import "./globals.css";


const HomePage = () => {
  return (
    //formatting for the overall page
    <div className='outerContainer'>
      <main className='homePageMain'>
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
                <button>Professor</button>
              </Link>
              <Link href="/rating/course">
                <button>Course</button>
              </Link>
              <Link href="/rating/university">
                <button>University</button>
              </Link>
            </div>
          </div>
          {/* makes sure the picture is formatted properly*/} 
          <div style={styles.imageContainer}>
            <Image className='imageMain'
              src={eyeCatch}
              alt="woman and man sitting in front of monitor credit: Desola Lanre-Ologun via Unsplash"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

// CSS styles
const styles = {

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
    color: '#DEDDEE',
    marginTop: '20px', // Add margin-top to create a line break
  },

  //css for the container of buttons
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

};

export default HomePage;
