import React from 'react';
import Link from 'next/link'; 
import styles from "../../rating/rating.module.css";


const CourseRatingPage = () => {
    return (
        <div className='outerContainer'> {/* Apply container class */}
            <form className={styles.form}> {/* Apply form class */}
                <h1 className={styles.title}>Course Grade</h1> {/* Apply title class */}
                <div className={styles.inputGroup}> {/* Apply inputGroup class */}
                    <label>Course Name:</label> {/* Apply label class */}
                    <input type="text" name="courseName" required /> {/* Apply input class */}
                </div>
                <div className={styles.inputGroup}>
                    <label>University:</label>
                    <input type="text" name="university" required />
                </div>
                <div className={styles.inputGroup}>
                    <label>Review:</label>
                    <textarea name="review" rows="4" required></textarea> {/* Apply textarea class */}
                </div>
                 {/* Circular buttons for grade selection */}
        <div className={styles.gradeSelection}>
          {['A', 'B', 'C', 'D', 'F'].map((grade) => (
            <button
              key={grade}
              type="button"
            >
              {grade}
            </button>
          ))}
        </div>
                {/* will take you to the graded class page once review is complete*/}
                <Link href='/graded/class'>
                <button type="submit">Submit Course Grade</button> {/* Apply button class */}
                </Link>
            </form>
        </div>
    );
};

export default CourseRatingPage;
